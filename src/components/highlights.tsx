"use client";

import { useSite } from "./site-provider";

export function Highlights() {
  const { t } = useSite();

  return (
    <section
      aria-label={t.ui.summaryLabel}
      className="border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:gap-y-0 lg:px-8">
        {t.highlights.map((item, index) => (
          <div
            key={item.label}
            className={`px-2 sm:px-4 ${
              index !== 0 ? "lg:border-s lg:border-slate-200 dark:lg:border-slate-800" : ""
            }`}
          >
            <p className="text-3xl font-black text-slate-950 dark:text-white">{item.value}</p>
            <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
