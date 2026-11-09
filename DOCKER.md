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

سپس TLS را با Certbot یا Caddy فعال کنید. اگر پنل و لندینگ روی یک سرور هستند، می‌توانید در همان nginx دو `server_name` جدا تعریف کنید و پنل را به کانتینر فعلی‌اش (پورت `80`) و لندینگ را به `127.0.0.1:3000` بفرستید.

## ۶. نکات

- فونت‌های یکان‌بخ داخل ایمیج کپی می‌شوند (`public/fonts`)؛ اگر فونت‌ها ۴۰۴ دادند، مطمئن شوید `public` در ایمیج هست.
- ایمیج با `USER node` اجرا می‌شود و به روت یا پکیج سیستمی نیاز ندارد.
- برای بررسی سلامت: `docker inspect --format '{{.State.Health.Status}}' <container>`.
- اگر دکمه‌های ورود به `localhost:5173` می‌روند، `NEXT_PUBLIC_APP_URL` تنظیم نشده یا ایمیج بدون `--build` دوباره استفاده شده است.
- لاگ‌ها روی stdout هستند: `docker compose logs -f landing`.
