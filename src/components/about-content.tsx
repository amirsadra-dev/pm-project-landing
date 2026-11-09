"use client";

import Link from "next/link";
import { ArrowLeftIcon, CheckIcon, GlobeIcon, ShieldIcon, SparklesIcon } from "./icons";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";

const valueIcons = [ShieldIcon, SparklesIcon, GlobeIcon];

export function AboutContent() {
  const { t } = useSite();
  const about = t.about;

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 end-[-8rem] size-80 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-500/10" />
          <div className="absolute top-10 start-[-10rem] size-72 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10" />
          <div className="bg-grid absolute inset-0 opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <span className="size-1.5 rounded-full bg-brand-500" />
              {about.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-4xl font-black leading-[1.3] tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {about.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-lg shadow-brand-900/5 dark:border-brand-500/20 dark:bg-slate-900 sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20">
              <SparklesIcon className="size-5" />
            </span>
            <h2 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
              {about.missionTitle}
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
              {about.missionText}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <article
                  key={value.title}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
              {about.eyebrow}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white">
              {about.storyTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {about.storyText}
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {about.bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <CheckIcon className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-violet-50 p-8 shadow-xl shadow-brand-900/5 dark:border-brand-500/20 dark:from-brand-500/10 dark:via-slate-900 dark:to-violet-500/10 dark:shadow-black/30 sm:p-10">
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-balance text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                  {about.ctaTitle}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {about.ctaText}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
                >
                  {about.ctaContact}
                  <ArrowLeftIcon className="size-4 ltr:-scale-x-100" />
                </Link>
                <a
                  href={site.loginUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  {about.ctaPanel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
