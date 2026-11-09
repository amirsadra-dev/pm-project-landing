"use client";

import { LogoMark } from "./icons";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";

export function SiteFooter() {
  const { t } = useSite();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="size-10" />
              <div className="leading-tight">
                <p className="text-base font-extrabold text-slate-900 dark:text-white">
                  {t.brand.name}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {t.brand.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
              {t.brand.description}
            </p>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">
              {t.footer.navTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">
              {t.footer.startTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.loginUrl}
                  className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t.ui.login}
                </a>
              </li>
              <li>
                <a
                  href={site.registerUrl}
                  className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t.cta.primary}
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t.footer.productLink}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <p>{t.ui.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
