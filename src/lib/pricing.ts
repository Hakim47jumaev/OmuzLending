// Цены и правила калькулятора. Перенесены 1:1 из renderVals() макета Main.dc.html.

export type PlanId = "starter" | "pro" | "biz" | "ent";
export type AddonId = "exams" | "ai" | "inbox" | "campaigns" | "jobs" | "certs" | "reports" | "library";

export const PLAN_IDS: PlanId[] = ["starter", "pro", "biz", "ent"];

export const PLAN_NAMES: Record<PlanId, string> = {
  starter: "Starter",
  pro: "Professional",
  biz: "Business",
  ent: "Enterprise",
};

/** Цена тарифа за месяц (первый филиал), сомони. */
export const PLAN_PRICE: Record<PlanId, number> = {
  starter: 350,
  pro: 750,
  biz: 1200,
  ent: 1500,
};

/** Тариф с плашкой «Популярный». */
export const POPULAR_PLAN: PlanId = "pro";

/** Дополнительные модули: цена в месяц и в какой тариф модуль входит (для подписи). */
export const ADDONS: { id: AddonId; price: number; incl: "" | "pro" | "biz" }[] = [
  { id: "exams", price: 250, incl: "pro" },
  { id: "ai", price: 200, incl: "pro" },
  { id: "inbox", price: 200, incl: "biz" },
  { id: "campaigns", price: 150, incl: "" },
  { id: "jobs", price: 150, incl: "" },
  { id: "certs", price: 100, incl: "" },
  { id: "reports", price: 100, incl: "" },
  { id: "library", price: 200, incl: "" },
];

/** Какие дополнительные модули уже входят в тариф. */
export const PLAN_INCLUDES: Record<PlanId, AddonId[]> = {
  starter: [],
  pro: ["exams", "ai"],
  biz: ["exams", "ai", "inbox"],
  ent: ["exams", "ai", "inbox"],
};

export const BRANCHES = { min: 1, max: 5, step: 1, initial: 1 } as const;
export const STUDENTS = { min: 50, max: 3000, step: 50, initial: 100 } as const;

/** Периоды оплаты: число месяцев и скидка. */
export const PERIODS = [
  { months: 1, discount: 0 },
  { months: 6, discount: 0.2 },
  { months: 12, discount: 0.3 },
] as const;

/** Формат суммы: 1200 → «1 200». */
export const formatMoney = (n: number): string => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/** Базовая цена тарифа за месяц при заданных вводных или null, если тариф недоступен. */
export function planBase(id: PlanId, branches: number, students: number): number | null {
  switch (id) {
    case "starter":
      return branches === 1 && students <= 100 ? 350 : null;
    case "pro":
      return 750 + 400 * (branches - 1);
    case "biz":
      return branches <= 3 ? 1200 : null;
    case "ent":
      return 1500 + 300 * (branches - 1);
  }
}

export type PlanQuote =
  | { id: PlanId; available: false }
  | { id: PlanId; available: true; base: number; extra: number; total: number };

export interface CalcResult {
  quotes: PlanQuote[];
  best: Extract<PlanQuote, { available: true }>;
  selectedCount: number;
}

/** Считает цену каждого тарифа с выбранными модулями и выбирает самый дешёвый. */
export function calculate(branches: number, students: number, selected: ReadonlySet<AddonId>): CalcResult {
  const quotes: PlanQuote[] = PLAN_IDS.map((id) => {
    const base = planBase(id, branches, students);
    if (base === null) return { id, available: false };
    const extra = ADDONS.reduce(
      (sum, a) => (selected.has(a.id) && !PLAN_INCLUDES[id].includes(a.id) ? sum + a.price : sum),
      0,
    );
    return { id, available: true, base, extra, total: base + extra };
  });

  const available = quotes.filter((q): q is Extract<PlanQuote, { available: true }> => q.available);
  // Pro и Enterprise доступны всегда, поэтому список не бывает пустым.
  const best = available.reduce((min, q) => (q.total < min.total ? q : min), available[0]);

  return { quotes, best, selectedCount: ADDONS.filter((a) => selected.has(a.id)).length };
}

/** Цена тарифа в месяц и итог за период с учётом скидки. */
export function periodPrice(plan: PlanId, periodIndex: number): { monthly: number; total: number } {
  const { months, discount } = PERIODS[periodIndex];
  const monthly = Math.round(PLAN_PRICE[plan] * (1 - discount));
  return { monthly, total: monthly * months };
}
