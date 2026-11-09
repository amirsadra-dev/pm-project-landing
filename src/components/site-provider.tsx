"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Language, type Theme } from "@/lib/content";

const THEME_KEY = "pm-landing-theme";
const LANG_KEY = "pm-landing-lang";

type SiteContextValue = {
  lang: Language;
  dir: "rtl" | "ltr";
  theme: Theme;
  t: Content;
  toggleTheme: () => void;
  toggleLang: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fa");
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(THEME_KEY);
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      } else {
        setTheme(systemDark ? "dark" : "light");
      }

      const savedLang = window.localStorage.getItem(LANG_KEY);
      setLang(savedLang === "en" ? "en" : "fa");
    } catch {
      // Storage or matchMedia unavailable: keep the defaults.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore storage failures.
    }
  }, [theme, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Ignore storage failures.
    }
  }, [lang, hydrated]);

  const value: SiteContextValue = {
    lang,
    dir: lang === "fa" ? "rtl" : "ltr",
    theme,
    t: content[lang],
    toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
    toggleLang: () => setLang((current) => (current === "fa" ? "en" : "fa")),
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used inside SiteProvider");
  }
  return context;
}
