import en from "./en";
import ru from "./ru";
import tg from "./tg";
import type { Content } from "./types";

/** Сегменты URL. Таджикский живёт на /tj (код языка в HTML и hreflang — "tg", см. htmlLang). */
export const LOCALES = ["tj", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tj";

const CONTENT: Record<Locale, Content> = { tj: tg, ru, en };

export const hasLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

export const getContent = (locale: Locale): Content => CONTENT[locale];

/** Подписи для переключателя языка. */
export const LOCALE_SWITCH = LOCALES.map((code) => ({ code, label: CONTENT[code].switchLabel }));

export type { Content };
