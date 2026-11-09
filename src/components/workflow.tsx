"use client";

import { useSite } from "./site-provider";

export function Workflow() {
  const { t } = useSite();

  return (
    <section
      id="workflow"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-50/70 py-20 dark:border-slate-800 dark:bg-slate-900/50 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
            {t.workflow.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {t.workflow.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {t.workflow.description}
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-7 hidden border-t border-dashed border-slate-300 dark:border-slate-700 lg:block"
          />
          {t.workflow.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
            >
              <span className="relative z-10 grid size-10 place-items-center rounded-xl bg-brand-600 text-sm font-black text-white shadow-lg shadow-brand-600/25">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
