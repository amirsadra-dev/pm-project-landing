import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "تماس با ما | پیام پروژه",
  description:
    "برای سوال درباره پنل پیام پروژه، استقرار سازمانی یا همکاری با تیم ما در تماس باشید.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader />
      <main>
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  );
}
