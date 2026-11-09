"use client";

import { CheckIcon, SparklesIcon } from "./icons";
import { useSite } from "./site-provider";

export function AiSection() {
  const { t, lang } = useSite();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 shadow-xl shadow-slate-900/10 sm:px-10 lg:px-14 lg:py-14 dark:ring-1 dark:ring-slate-800">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 end-0 size-80 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -bottom-24 start-10 size-72 rounded-full bg-violet-600/20 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-brand-200">
                <SparklesIcon className="size-4" />
                {t.ai.badge}
              </span>
              <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                {t.ai.title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                {t.ai.description}
              </p>

              <ul className="mt-6 space-y-3">
                {t.ai.inputs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-slate-500">{t.ai.footnote}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-brand-500/20 text-brand-200">
                    <SparklesIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold text-white">{t.ai.cardTitle}</p>
                    <p className="text-[10px] text-slate-400">{t.ai.cardMeta}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-slate-300">
                  {t.ai.cardBadge}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {t.ai.insights.map((insight, index) => (
                  <div key={insight} className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-[10px] font-bold text-brand-200">
                      {(index + 1).toLocaleString(lang === "fa" ? "fa-IR" : "en-US")}
                    </span>
                    <p className="text-[11px] leading-6 text-slate-300">{insight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-slate-400">
                <span>{t.ai.footer}</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
                  {t.ai.done}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
