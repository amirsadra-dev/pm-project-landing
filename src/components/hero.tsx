"use client";

import { ArrowLeftIcon, BellIcon, CheckIcon } from "./icons";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";
import { DashboardMock } from "./dashboard-mock";

export function Hero() {
  const { t } = useSite();

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 end-[-10rem] size-[34rem] rounded-full bg-brand-200/45 blur-3xl dark:bg-brand-500/10" />
        <div className="absolute top-24 start-[-12rem] size-[30rem] rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-500/10" />
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
            <span className="size-1.5 rounded-full bg-brand-500" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.3] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.4rem]">
            {t.hero.titleLead}{" "}
            <span className="text-brand-600 dark:text-brand-400">{t.hero.titleAccent}</span>
            {t.hero.titleTrail ? ` ${t.hero.titleTrail}` : null}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.loginUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {t.hero.ctaPrimary}
              <ArrowLeftIcon className="size-4 ltr:-scale-x-100" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {t.hero.trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
              >
                <span className="grid size-4 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  <CheckIcon className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-rise [animation-delay:120ms] lg:max-w-none">
          <DashboardMock />

          <div className="animate-float absolute -top-6 end-0 z-10 hidden w-48 items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50/95 p-3 shadow-xl shadow-amber-900/10 backdrop-blur dark:border-amber-400/30 dark:bg-slate-900/95 dark:shadow-black/40 sm:flex">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300">
              <BellIcon className="size-4" />
            </span>
            <span>
              <span className="block text-[11px] font-extrabold text-amber-900 dark:text-amber-200">
                {t.hero.float.title}
              </span>
              <span className="block text-[10px] text-amber-700 dark:text-amber-300/80">
                {t.hero.float.meta}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
