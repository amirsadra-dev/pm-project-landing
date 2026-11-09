"use client";

import { ArrowLeftIcon } from "./icons";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";

export function FinalCta() {
  const { t } = useSite();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-6 py-12 text-center shadow-2xl shadow-brand-900/20 sm:px-10 lg:py-16 dark:shadow-black/40">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 start-1/4 size-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 end-10 size-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-50 sm:text-base">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.registerUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 shadow-lg shadow-brand-950/20 transition hover:bg-brand-50"
              >
                {t.cta.primary}
                <ArrowLeftIcon className="size-4 ltr:-scale-x-100" />
              </a>
              <a
                href={site.loginUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
