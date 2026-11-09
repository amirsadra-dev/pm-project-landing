"use client";

import type { ComponentType, SVGProps } from "react";
import { CheckIcon, LayersIcon, ShieldIcon, UsersIcon } from "./icons";
import { useSite } from "./site-provider";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const roleIcons: IconComponent[] = [ShieldIcon, LayersIcon, UsersIcon];

export function Roles() {
  const { t } = useSite();

  return (
    <section id="roles" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-extrabold tracking-wide text-brand-600 dark:text-brand-400">
              {t.roles.eyebrow}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              {t.roles.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.roles.description}
            </p>

            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/70 p-4 dark:border-brand-500/20 dark:bg-brand-500/10">
              <p className="text-xs font-extrabold text-brand-900 dark:text-brand-200">
                {t.roles.projectRoleTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.roles.projectRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-bold text-brand-700 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-6 text-brand-800/80 dark:text-brand-200/80">
                {t.roles.projectRoleNote}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.roles.items.map((role, index) => {
              const Icon = roleIcons[index];
              return (
                <article
                  key={role.title}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:shadow-black/20"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    {role.subtitle}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-6 text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <CheckIcon className="size-2.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
