# syntax=docker/dockerfile:1

# ---- dependencies ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---- build ----
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* values are inlined into the bundle at build time, so changing
# the panel URL requires rebuilding the image (see DOCKER.md).
ARG NEXT_PUBLIC_APP_URL=http://localhost:5173
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

RUN npm run build

# ---- runtime ----
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# The standalone output already contains the traced node_modules. Static assets
# and public files (Yekan Bakh fonts) are not part of it and are copied here.
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
