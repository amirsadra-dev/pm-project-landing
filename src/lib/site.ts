const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173").replace(/\/+$/, "");

export const site = {
  name: "PM",
  nameEn: "PM Project",
  tagline: "سیستم مدیریت نگهداری پیشگیرانه",
  description:
    "PM یک پنل مدیریت پروژه است که تجهیزات، برنامه‌های نگهداری، سوابق سرویس، قطعات یدکی و گزارش‌ها را با دسترسی نقش‌محور یکپارچه می‌کند.",
  appUrl,
  loginUrl: `${appUrl}/login`,
  registerUrl: `${appUrl}/register`,
  // Phone comes from the official company details; the inbox is still a placeholder.
  contactEmail: "hello@pm-project.ir",
  contactPhone: "035-37334654",
} as const;

export const navigation = [
  { href: "#features", label: "امکانات" },
  { href: "#product", label: "نمای پنل" },
  { href: "#workflow", label: "گردش کار" },
  { href: "#roles", label: "نقش‌ها" },
  { href: "#faq", label: "سوالات متداول" },
] as const;
