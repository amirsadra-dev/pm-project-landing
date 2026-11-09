"use client";

import { useSite } from "./site-provider";

export function Faq() {
  const { t } = useSite();

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50/70 py-20 dark:border-slate-800 dark:bg-slate-900/50 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
              {t.faq.eyebrow}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              {t.faq.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.faq.description}
            </p>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-brand-200 open:bg-brand-50/30 dark:border-slate-800 dark:bg-slate-900 dark:open:border-brand-500/30 dark:open:bg-brand-500/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900 dark:text-white">
                  {faq.question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-base font-medium text-slate-500 transition group-open:rotate-45 group-open:border-brand-200 group-open:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-open:border-brand-500/40 dark:group-open:text-brand-300">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
