# PM — لندینگ

لندینگ‌پیج فارسی (راست‌به‌چپ) برای پنل **PM** (Project Manager)، ساخته‌شده با Next.js App Router، React و Tailwind CSS v4 و فونت **یکان‌بخ**.

## اجرا

```bash
npm install
npm run dev
```

سپس `http://localhost:3000` را باز کنید.

```bash
npm run build   # بیلد تولیدی
npm start       # اجرای بیلد
npm run typecheck
```

## اتصال به پنل

دکمه‌های «ورود» و «ثبت‌نام» به آدرس پنل اشاره می‌کنند. آدرس را در `.env.local` تنظیم کنید:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:5173
```

مسیرهای `/login` و `/register` به همین آدرس اضافه می‌شوند.

## مسیرها

| مسیر | توضیح |
| --- | --- |
| `/` | لندینگ اصلی |
| `/about` | درباره ما |
| `/contact` | تماس با ما و فرم ارسال پیام |

اطلاعات تماس نمایش‌داده‌شده در `src/lib/site.ts` (`contactEmail` و `contactPhone`) قابل تغییر است. فرم تماس بک‌اند ندارد و پیام را با برنامه ایمیل کاربر به همان آدرس می‌فرستد.

## استقرار با Docker

```bash
cp .env.example .env   # NEXT_PUBLIC_APP_URL را روی دامنه پنل بگذارید
docker compose up -d --build
```

لندینگ روی پورت `3000` (قابل تغییر با `LANDING_PORT`) بالا می‌آید و healthcheck دارد. راهنمای کامل، اجرای بدون Compose و نمونه reverse proxy در [DOCKER.md](./DOCKER.md) آمده است.

## CI/CD

با push روی شاخهٔ `main`، ورک‌فلوی `.github/workflows/deploy.yml` ابتدا typecheck، build و ساخت آزمایشی ایمیج Docker را اجرا می‌کند و سپس لندینگ را با SSH و Docker Compose روی سرور مستقر می‌کند. Secrets، آماده‌سازی سرور و rollback در [DOCKER.md](./DOCKER.md#۷-استقرار-خودکار-cicd) آمده است.

## تم و زبان

در هدر، دکمهٔ خورشید/ماه بین حالت روشن و تیره جابه‌جا می‌کند و دکمهٔ `EN` / `فا` زبان را عوض می‌کند. انتخاب‌ها در `localStorage` ذخیره می‌شوند (`pm-landing-theme` و `pm-landing-lang`) و اسکریپت داخل `layout.tsx` آن‌ها را پیش از رندر اعمال می‌کند تا فلش تم دیده نشود. فارسی با چیدمان RTL و انگلیسی با LTR نمایش داده می‌شود و همهٔ متن‌ها، از جمله محتوای پیش‌نمایش پنل، از `src/lib/content.ts` می‌آیند. قاب پیش‌نمایش پنل عمداً روشن می‌ماند تا نمای واقعی محصول در هر دو تم حفظ شود.

## فونت

فایل‌های متغیر یکان‌بخ از پنل (`pm-project-client/public/fonts/webfonts`) کپی شده‌اند:

- `public/fonts/YekanBakh-VF.woff2` / `.woff` (فارسی + لاتین)
- `public/fonts/YekanBakhFaNum-VF.woff2` / `.woff` (ارقام فارسی)

در `src/app/globals.css` با `@font-face` و وزن متغیر `100 950` ثبت شده‌اند.

## ساختار

```
src/
├── app/
│   ├── layout.tsx      # lang="fa" dir="rtl"، متادیتا و اسکریپت تم/زبان
│   ├── page.tsx        # ترکیب بخش‌های لندینگ
│   ├── about/page.tsx  # درباره ما
│   ├── contact/page.tsx# تماس با ما
│   └── globals.css     # فونت، توکن‌های Tailwind و انیمیشن‌ها
├── components/
│   ├── site-provider.tsx   # وضعیت تم روشن/تیره و زبان فارسی/انگلیسی
│   ├── about-content.tsx   # محتوای درباره ما
│   ├── contact-content.tsx # اطلاعات تماس و فرم پیام
│   ├── site-header.tsx     # هدر چسبان + منوی موبایل + سوییچ تم و زبان
│   ├── hero.tsx            # معرفی و دکمه‌های اقدام
│   ├── dashboard-mock.tsx  # پیش‌نمایش داشبورد
│   ├── highlights.tsx      # خلاصه قابلیت‌ها
│   ├── features.tsx        # شبکه امکانات
│   ├── product-tabs.tsx    # پیش‌نمایش تعاملی پنل
│   ├── ai-section.tsx      # تحلیل هوشمند گزارش‌ها
│   ├── workflow.tsx        # چرخه چهار مرحله‌ای نگهداری
│   ├── roles.tsx           # نقش‌ها و دسترسی پروژه‌محور
│   ├── faq.tsx             # سوالات متداول
│   ├── final-cta.tsx       # دعوت نهایی
│   └── site-footer.tsx
└── lib/
    ├── content.ts      # دیکشنری کامل متن‌های فارسی و انگلیسی
    └── site.ts         # نام برند، آدرس پنل و ناوبری
```

محتوا از قابلیت‌های واقعی `pm-project-client` و `pm-project-service` گرفته شده است: پروژه‌ها و دسترسی پروژه‌محور، تجهیزات و انواع تجهیز، برنامه‌های پیشگیرانه/اصلاحی/اضطراری، ثبت سرویس و تولید خودکار برنامه بعدی، قطعات یدکی و هشدار ۳۰ روزه، گزارش‌ها، تحلیل هوش مصنوعی، نقش‌های مدیر سیستم/مدیر/کاربر و رابط دو زبانه.
