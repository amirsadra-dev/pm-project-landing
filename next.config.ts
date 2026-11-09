import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Produces .next/standalone with a minimal node_modules trace for Docker.
  output: "standalone",
  // This project lives beside other repos with their own lockfiles; pin tracing
  // to the landing project so a parent lockfile is not inferred as the root.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
