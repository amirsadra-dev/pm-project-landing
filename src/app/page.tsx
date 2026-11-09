import { AiSection } from "@/components/ai-section";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { ProductTabs } from "@/components/product-tabs";
import { Roles } from "@/components/roles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Workflow } from "@/components/workflow";

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <ProductTabs />
        <AiSection />
        <Workflow />
        <Roles />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
