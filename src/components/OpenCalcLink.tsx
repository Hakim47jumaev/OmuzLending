"use client";

import type { ReactNode } from "react";
import { useLanding } from "./LandingShell";

/** Ссылка на #addons, которая сначала открывает скрытый калькулятор. */
export default function OpenCalcLink({ className, children }: { className?: string; children: ReactNode }) {
  const { openCalc } = useLanding();
  return (
    <a
      className={className}
      href="#addons"
      onClick={(e) => {
        e.preventDefault();
        openCalc();
      }}
    >
      {children}
    </a>
  );
}
