"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

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

const scrollToCalc = () => {
  // Секция становится видимой после рендера — ждём кадр, как в макете (setTimeout 80 мс).
  window.setTimeout(() => document.getElementById("addons")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
};

/** Корневая обёртка страницы: тема, видимость калькулятора и выбранный тариф для формы. */
export default function LandingShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [formPlan, setFormPlan] = useState("");

  const toggleTheme = useCallback(() => setDark((d) => !d), []);
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
