import en from "./en";
import ru from "./ru";
import tg from "./tg";
import type { Content } from "./types";

export const LOCALES = ["tg", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tg";

const CONTENT: Record<Locale, Content> = { tg, ru, en };

export const hasLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

export const getContent = (locale: Locale): Content => CONTENT[locale];

/** Подписи для переключателя языка. */
export const LOCALE_SWITCH = LOCALES.map((code) => ({ code, label: CONTENT[code].switchLabel }));

export type { Content };
