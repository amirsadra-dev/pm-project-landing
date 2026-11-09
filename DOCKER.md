# استقرار لندینگ روی سرور با Docker

لندینگ یک کانتینر Node دارد که خروجی **standalone** نکست را اجرا می‌کند؛ هیچ دیتابیس یا سرویس جانبی لازم نیست. فقط آدرس پنل باید هنگام بیلد مشخص باشد.

| مورد | مقدار |
| --- | --- |
| پورت داخلی | `3000` |
| پورت هاست | `${LANDING_PORT:-3000}` |
| کاربر اجرا | `node` (غیر روت) |
| Healthcheck | `GET /` |
| متغیر بیلد | `NEXT_PUBLIC_APP_URL` |

## ۱. تنظیمات

```bash
cd pm-project-landing
cp .env.example .env
```

داخل `.env`:

```bash
# آدرس پنل؛ دکمه‌های ورود/ثبت‌نام به این دامنه اشاره می‌کنند
NEXT_PUBLIC_APP_URL=https://app.example.com

# پورت انتشار روی هاست
LANDING_PORT=3000

# اگر reverse proxy جلوی کانتینر است، فقط روی لوکال‌هاست منتشر شود
LANDING_BIND=127.0.0.1
```

`NEXT_PUBLIC_APP_URL` در زمان **بیلد** داخل باندل قرار می‌گیرد؛ بعد از تغییر آن باید ایمیج دوباره ساخته شود.

## ۲. بالا آوردن

```bash
docker compose up -d --build
docker compose ps                 # وضعیت healthy
curl -I http://127.0.0.1:3000/    # باید 200 برگرداند
docker compose logs -f landing
```

## ۳. اجرا بدون Compose

```bash
docker build \
  --build-arg NEXT_PUBLIC_APP_URL=https://app.example.com \
  -t pm-project-landing:latest .

docker run -d --name pm-project-landing \
  -p 127.0.0.1:3000:3000 \
  --restart unless-stopped \
  pm-project-landing:latest
```

## ۴. به‌روزرسانی

```bash
git pull
docker compose up -d --build       # فقط ایمیج لندینگ بازسازی می‌شود
docker image prune -f              # پاک‌سازی لایه‌های قدیمی (اختیاری)
```

## ۵. قرار دادن پشت reverse proxy و HTTPS

کانتینر را روی `127.0.0.1:3000` نگه دارید و دامنه را به آن پروکسی کنید. نمونهٔ nginx:

```nginx
server {
    listen 80;
    server_name pm.example.com;

    client_max_body_size 10m;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }
}
```

سپس TLS را با Certbot یا Caddy فعال کنید. اگر پنل و لندینگ روی یک سرور هستند، بخش بعدی را بخوانید؛ پنل فعلی خودش پورت `80` را منتشر می‌کند و برای قرار گرفتن پشت همین nginx باید پورتش را تغییر دهید.

## ۶. استقرار در کنار pm-project-client

پنل (`pm-project-client`) یک SPA است که nginx داخل کانتینر آن روی پورت `80` سرو می‌شود و `/api/` را به سرویس بک‌اند پروکسی می‌کند. لندینگ یک کانتینر مستقل Next است:

| سرویس | پورت داخلی | انتشار پیشنهادی |
| --- | --- | --- |
| پنل (pm-project) | `80` | `127.0.0.1:8080` وقتی reverse proxy روی `80/443` دارید |
| لندینگ | `3000` | `127.0.0.1:3000` |

- لندینگ را روی پورت `80` منتشر نکنید؛ با پنل تداخل می‌کند.
- لندینگ را زیر مسیر همان دامنه پنل سرو نکنید؛ nginx پنل با `try_files $uri $uri/ /index.html` همه مسیرها را به SPA می‌فرستد. از ساب‌دامین جدا استفاده کنید (مثلاً `app.example.com` برای پنل و `pm.example.com` برای لندینگ).
- اگر nginx یا Caddy روی هاست پورت `80/443` را می‌گیرد، انتشار پنل را به لوکال‌هاست منتقل کنید؛ نام متغیر به composeیی بستگی دارد که استفاده می‌کنید:
  - با compose ریشهٔ استقرار (`/opt/myapp/docker-compose.yml`): `HTTP_PORT=127.0.0.1:8080`
  - با compose داخل کلاینت (`pm-project-client/docker-compose.yml`): `CLIENT_PORT=127.0.0.1:8080`

  سپس `docker compose up -d client` را از همان پوشه اجرا کنید (فقط پورت عوض می‌شود و بیلد لازم نیست). دامنه پنل را به `127.0.0.1:8080` و دامنه لندینگ را به `127.0.0.1:3000` پروکسی کنید.
- اگر reverse proxy روی هاست ندارید، ساده‌ترین حالت این است که لندینگ را روی سرور یا ساب‌دامین جدا با همان پورت `3000` بالا بیاورید.
- `NEXT_PUBLIC_APP_URL` باید آدرس عمومی پنل باشد (`https://app.example.com`)، نه `http://localhost:5173`.
- ورک‌فلوی اختصاصی لندینگ در `.github/workflows/deploy.yml` قرار دارد و مستقل از ورک‌فلوی `pm-project-client` اجرا می‌شود. جزئیات در بخش ۷ آمده است.

```nginx
server {
    listen 80;
    server_name app.example.com;   # پنل

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name pm.example.com;    # لندینگ

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }
}
```

## ۷. استقرار خودکار (CI/CD)

ورک‌فلوی `.github/workflows/deploy.yml` داخل ریپوی `pm-project-landing` قرار دارد. با هر push روی شاخهٔ `main` (و اجرای دستی) دو job اجرا می‌شود:

1. **build**: نصب وابستگی‌ها، `typecheck`، `next build` و ساخت آزمایشی ایمیج Docker روی runner.
2. **deploy**: اتصال SSH به سرور، `git fetch/reset` روی `main`، اجرای `docker compose build landing`، بالا آوردن کانتینر و انتظار تا `healthy` شدن آن.

پیش از بیلد، وجود `.env` و مقدار `NEXT_PUBLIC_APP_URL` روی سرور بررسی می‌شود تا ایمیج با آدرس لوکال ساخته نشود. در صورت unhealthy شدن، لاگ‌های کانتینر در خروجی workflow چاپ می‌شوند.

### Secrets و Variables

| نام | نوع | توضیح |
| --- | --- | --- |
| `SERVER_HOST` | Secret | IP یا دامنهٔ سرور |
| `SERVER_USER` | Secret | کاربر SSH که عضو گروه docker است |
| `SERVER_SSH_KEY` | Secret | کلید خصوصی SSH |
| `SERVER_PORT` | Secret (اختیاری) | پیش‌فرض `22` |
| `NEXT_PUBLIC_APP_URL` | Variable | آدرس عمومی پنل؛ فقط برای بیلد آزمایشی CI |

`NEXT_PUBLIC_APP_URL` در سرور از `.env` خوانده می‌شود و همان مقدار داخل ایمیج نهایی قرار می‌گیرد. مقدار Variable در GitHub فقط برای بیلد آزمایشی CI است.

### آماده‌سازی سرور

```bash
sudo mkdir -p /opt/myapp
sudo chown "$USER":"$USER" /opt/myapp
git clone https://github.com/amirsadra-dev/pm-project-landing.git /opt/myapp/pm-project-landing
cd /opt/myapp/pm-project-landing
cp .env.example .env
# داخل .env:
# NEXT_PUBLIC_APP_URL=https://app.example.com
# LANDING_BIND=127.0.0.1
# LANDING_PORT=3000

docker compose up -d --build
```

- کاربر SSH باید docker را بدون sudo اجرا کند:

```bash
sudo usermod -aG docker "$USER"
# بعد از این دستور یک بار logout/login کنید
```

- کلید عمومی متناظر با `SERVER_SSH_KEY` را در `~/.ssh/authorized_keys` سرور قرار بده.
- سرور باید اجازهٔ `git fetch` از مخزن لندینگ را داشته باشد (deploy key یا توکن).
- `.env` خارج از گیت است و با `git reset --hard` پاک نمی‌شود.
- اگر مسیر checkout را عوض کردی، مقدار `APP_DIR` را در `deploy.yml` تغییر بده.

### تنظیم GitHub

- Secretها را در **Settings → Secrets and variables → Actions → Secrets** اضافه کن.
- `NEXT_PUBLIC_APP_URL` را در همان صفحه، تب **Variables**، با آدرس عمومی پنل تنظیم کن.
- این workflow فقط در ریپوی `pm-project-landing` اجرا می‌شود؛ از ریپوی کلاینت اجرا نمی‌شود.

### بازگشت به نسخهٔ قبل (Rollback)

```bash
cd /opt/myapp/pm-project-landing
git log --oneline -5
git reset --hard <commit-sha>
docker compose up -d --build
```

## ۸. نکات

- فونت‌های یکان‌بخ داخل ایمیج کپی می‌شوند (`public/fonts`)؛ اگر فونت‌ها ۴۰۴ دادند، مطمئن شوید `public` در ایمیج هست.
- ایمیج با `USER node` اجرا می‌شود و به روت یا پکیج سیستمی نیاز ندارد.
- برای بررسی سلامت: `docker inspect --format '{{.State.Health.Status}}' <container>`.
- اگر دکمه‌های ورود به `localhost:5173` می‌روند، `NEXT_PUBLIC_APP_URL` تنظیم نشده یا ایمیج بدون `--build` دوباره استفاده شده است.
- لاگ‌ها روی stdout هستند: `docker compose logs -f landing`.
