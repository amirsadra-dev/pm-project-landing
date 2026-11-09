"use client";

import type { ComponentType, SVGProps } from "react";
import {
  BellIcon,
  BoxIcon,
  CalendarIcon,
  ChartIcon,
  ClipboardIcon,
  DeviceIcon,
  FolderIcon,
  GlobeIcon,
  LockIcon,
  SparklesIcon,
  UsersIcon,
  WrenchIcon,
} from "./icons";
import { useSite } from "./site-provider";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const featureIcons: IconComponent[] = [
  FolderIcon,
  DeviceIcon,
  CalendarIcon,
  WrenchIcon,
  ChartIcon,
  SparklesIcon,
  BoxIcon,
  UsersIcon,
  GlobeIcon,
];

const extraIcons: IconComponent[] = [BellIcon, LockIcon, ClipboardIcon];

export function Features() {
  const { t } = useSite();

  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
            {t.features.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {t.features.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {t.features.extras.map((extra, index) => {
            const Icon = extraIcons[index];
            return (
              <div
                key={extra.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {extra.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">
                    {extra.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
