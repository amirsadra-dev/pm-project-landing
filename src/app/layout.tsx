import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site-provider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  keywords: [
    "مدیریت نگهداری",
    "نگهداری پیشگیرانه",
    "مدیریت تجهیزات",
    "برنامه نگهداری",
    "CMMS",
    "PM",
    "مدیریت پروژه",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "fa_IR",
    siteName: site.name,
  },
};

// Applies the saved theme and language before first paint so returning visitors
// do not see a flash of the opposite theme or direction.
const bootstrapScript = `(function(){try{var t=localStorage.getItem('pm-landing-theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark){document.documentElement.classList.add('dark');}var l=localStorage.getItem('pm-landing-lang');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
