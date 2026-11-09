const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173").replace(/\/+$/, "");

export const site = {
  name: "پیام پروژه",
  nameEn: "PM Project",
  tagline: "سیستم مدیریت نگهداری پیشگیرانه",
  description:
    "پیام پروژه تجهیزات، برنامه‌های نگهداری، سوابق سرویس، قطعات یدکی و گزارش‌ها را در یک پنل پروژه‌محور با دسترسی نقش‌محور یکپارچه می‌کند.",
  appUrl,
  loginUrl: `${appUrl}/login`,
  registerUrl: `${appUrl}/register`,
} as const;

export const navigation = [
  { href: "#features", label: "امکانات" },
  { href: "#product", label: "نمای پنل" },
  { href: "#workflow", label: "گردش کار" },
  { href: "#roles", label: "نقش‌ها" },
  { href: "#faq", label: "سوالات متداول" },
] as const;
