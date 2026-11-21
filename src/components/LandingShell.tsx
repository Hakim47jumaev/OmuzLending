"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";

interface LandingState {
  dark: boolean;
  toggleTheme: () => void;
  calcOpen: boolean;
  /** Открыть калькулятор и прокрутить к нему. */
  openCalc: () => void;
  toggleCalc: () => void;
  /** Значение поля «Тариф» в форме заявки (пустая строка — «пока не выбрал»). */
  formPlan: string;
  setFormPlan: (plan: string) => void;
}

const LandingContext = createContext<LandingState | null>(null);

export function useLanding(): LandingState {
  const ctx = useContext(LandingContext);
  if (!ctx) throw new Error("useLanding must be used inside <LandingShell>");
  return ctx;
}

/*
 * Тема хранится в localStorage, поэтому она общая для всех трёх языков
 * и сохраняется после перезагрузки. Если хранилище недоступно (приватный режим),
 * тема живёт в памяти до перезагрузки.
 */
const THEME_KEY = "omuz-theme";
const themeListeners = new Set<() => void>();
let themeMemo: boolean | null = null;

function readDark(): boolean {
  if (themeMemo !== null) return themeMemo;
  try {
    themeMemo = window.localStorage.getItem(THEME_KEY) === "dark";
  } catch {
    themeMemo = false;
  }
  return themeMemo;
}

function writeDark(dark: boolean) {
  themeMemo = dark;
  try {
    window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  } catch {
    /* хранилище недоступно — остаётся значение в памяти */
  }
  themeListeners.forEach((l) => l());
}

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);
  // Смена темы в другой вкладке.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== THEME_KEY) return;
    themeMemo = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const scrollToCalc = () => {
  // Секция становится видимой после рендера — ждём кадр, как в макете (setTimeout 80 мс).
  window.setTimeout(() => document.getElementById("addons")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
};

/** Корневая обёртка страницы: тема, видимость калькулятора и выбранный тариф для формы. */
export default function LandingShell({ children }: { children: ReactNode }) {
  const dark = useSyncExternalStore(subscribeTheme, readDark, () => false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [formPlan, setFormPlan] = useState("");

  const toggleTheme = useCallback(() => writeDark(!readDark()), []);
  const openCalc = useCallback(() => {
    setCalcOpen(true);
    scrollToCalc();
  }, []);
  const toggleCalc = useCallback(() => {
    if (!calcOpen) scrollToCalc();
    setCalcOpen(!calcOpen);
  }, [calcOpen]);

  const value = useMemo(
    () => ({ dark, toggleTheme, calcOpen, openCalc, toggleCalc, formPlan, setFormPlan }),
    [dark, toggleTheme, calcOpen, openCalc, toggleCalc, formPlan],
  );

  return (
    <LandingContext.Provider value={value}>
      <div className={dark ? "omuz dark" : "omuz"}>{children}</div>
    </LandingContext.Provider>
  );
}
