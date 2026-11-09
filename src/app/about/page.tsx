import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "درباره ما | پیام پروژه",
  description:
    "درباره پیام پروژه، ماموریت و رویکرد تیم در ساده‌سازی نگهداری پیشگیرانه و مدیریت تجهیزات.",
};

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader />
      <main>
        <AboutContent />
      </main>
      <SiteFooter />
    </div>
  );
}
