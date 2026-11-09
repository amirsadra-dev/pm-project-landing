"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, CloseIcon, LogoMark, MenuIcon, MoonIcon, SunIcon } from "./icons";
import { site } from "@/lib/site";
import { useSite } from "./site-provider";

function Controls() {
  const { t, theme, toggleTheme, toggleLang } = useSite();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t.ui.switchToLight : t.ui.switchToDark}
        title={theme === "dark" ? t.ui.switchToLight : t.ui.switchToDark}
        className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        {theme === "dark" ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
      </button>
      <button
        type="button"
        onClick={toggleLang}
        aria-label={t.ui.switchLanguage}
        title={t.ui.switchLanguage}
        className="grid h-10 min-w-10 place-items-center rounded-xl border border-slate-200 px-2 text-xs font-extrabold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        {t.ui.languageShort}
      </button>
    </div>
  );
}

export function SiteHeader() {
  const { t } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="size-10" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-slate-900 dark:text-white">
              {t.brand.name}
            </span>
            <span className="mt-0.5 hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              {t.brand.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label={t.ui.mainNav} className="hidden items-center gap-1 lg:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Controls />
          <a
            href={site.loginUrl}
            className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.ui.login}
          </a>
          <a
            href={site.registerUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            {t.ui.startFree}
            <ArrowLeftIcon className="size-4 ltr:-scale-x-100" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Controls />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav aria-label={t.ui.mobileNav} className="flex flex-col">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={site.loginUrl}
              className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {t.ui.login}
            </a>
            <a
              href={site.registerUrl}
              className="rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white"
            >
              {t.ui.startFree}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
