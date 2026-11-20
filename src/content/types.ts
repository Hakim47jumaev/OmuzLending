import type { AddonId, PlanId } from "@/lib/pricing";

/** Ячейка таблицы сравнения: 1 — есть, 0 — нет, строка — текстовое значение. */
export type CompareCell = 0 | 1 | string;

export interface Content {
  /** Код языка для <html lang> и hreflang. */
  htmlLang: string;
  /** Подпись в переключателе языка. */
  switchLabel: string;

  meta: {
    title: string;
    description: string;
    /** og:locale, например ru_RU. */
    ogLocale: string;
  };

  a11y: {
    menu: string;
    theme: string;
    prev: string;
    next: string;
    toTop: string;
    language: string;
  };

  nav: {
    features: string;
    addons: string;
    pricing: string;
    clients: string;
    contact: string;
    faq: string;
  };

  hero: {
    /** Заголовки, которые сменяют друг друга в h1. Первый — основной. */
    headlines: string[];
    sub: string;
    cta: string;
  };

  facts: { value: number; label: string }[];

  results: {
    title: string;
    before: string;
    now: string;
    note: string;
    rows: { name: string; before: string; after: string; delta: string }[];
  };

  stats: {
    title: string;
    items: { value: string; text: string; source: string }[];
  };

  modules: {
    title: string;
    sub: string;
    items: { name: string; desc: string }[];
  };

  flow: {
    title: string;
    sub: string;
    steps: string[];
  };

  devices: {
    title: string;
    sub: string;
    laptop: string;
    phone: string;
    sample: string;
    tabs: string[];
    points: string[];
  };

  video: { title: string };

  how: {
    title: string;
    steps: { title: string; desc: string }[];
  };

  pricing: {
    title: string;
    sub: string;
    /** Подписи переключателя периода: помесячно, 6 месяцев, год. */
    periods: string[];
    /** Плашки скидки к периодам (пустая строка — без плашки). */
    periodChips: string[];
    /** Строка «итого за период», {T} — сумма. Пустая строка — не показывать. */
    periodTotals: string[];
    popular: string;
    cta: string;
    soon: string;
    calcOpen: string;
    calcHide: string;
    plans: Record<
      PlanId,
      {
        /** Приставка к цене: «От», «Аз», «From» или пусто. */
        pricePrefix: string;
        unit: string;
        features: { text: string; soon?: boolean }[];
      }
    >;
  };

  compare: {
    title: string;
    moduleCol: string;
    rows: { name: string; cells: CompareCell[]; soon?: boolean }[];
  };

  calc: {
    title: string;
    addonsTitle: string;
    sub: string;
    branchesLabel: string;
    studentsLabel: string;
    modulesLabel: string;
    recommended: string;
    perMonth: string;
    currency: string;
    soon: string;
    includedInYours: string;
    includedPro: string;
    includedBiz: string;
    /** {B} — цена тарифа, {E} — цена модулей. */
    breakdown: string;
    baseOnly: string;
    allIn: string;
    branchWord: string;
    studentsWord: string;
    modulesWord: string;
    /** Почему тариф недоступен при текущих вводных. */
    reasons: Record<PlanId, string>;
    addons: Record<AddonId, { name: string; desc: string }>;
  };

  clients: {
    title: string;
    quotes: { text: string; name: string; role: string }[];
  };

  faq: {
    title: string;
    items: { q: string; a: string }[];
  };

  demo: {
    title: string;
    sub: string;
    name: string;
    phone: string;
    email: string;
    academy: string;
    plan: string;
    planUnsure: string;
    students: string;
    branches: string;
    now: string;
    optStudents: string[];
    optBranches: string[];
    optNow: string[];
    submit: string;
    /** Сообщения после отправки формы. */
    status: { sending: string; ok: string; invalid: string; error: string };
    call: string;
    placeLabel: string;
    place: string;
  };

  footer: {
    tagline: string;
    product: string;
    contact: string;
    rights: string;
  };
}
