"use server";

import en from "@/content/en";

/** Результат отправки заявки — по нему форма показывает сообщение. */
export type LeadState = { status: "idle" | "ok" | "invalid" | "error" };

const MAX_LEN = 200;

const read = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim().slice(0, MAX_LEN);

/** Списки в форме отправляют индекс варианта — подставляем английский текст, чтобы сообщение было всегда на английском. */
const pick = (list: string[], raw: string) => {
  const i = Number(raw);
  return Number.isInteger(i) && i >= 0 && i < list.length ? list[i] : raw;
};

const LANG_NAMES: Record<string, string> = { tj: "Tajik", ru: "Russian", en: "English" };

/** Отправляет заявку с формы в Telegram-группу (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID в .env). */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Ловушка для ботов: скрытое поле, которое человек не заполняет.
  if (read(formData, "website")) return { status: "ok" };

  const name = read(formData, "name");
  const phone = read(formData, "phone");
  if (!name || phone.replace(/\D/g, "").length < 7) return { status: "invalid" };

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const rawChat = process.env.TELEGRAM_CHAT_ID?.trim();
  // Числовой id (-100…) оставляем как есть; username группы Telegram принимает только с «@».
  const chatId = rawChat && !/^-?\d+$/.test(rawChat) && !rawChat.startsWith("@") ? `@${rawChat}` : rawChat;
  if (!token || !chatId) {
    console.error("[lead] TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env");
    return { status: "error" };
  }

  const d = en.demo;
  const lang = read(formData, "lang");
  // Формат сообщения согласован с заказчиком; подписи всегда на английском.
  const text = [
    "📬 New Contact Form Submission",
    `👤 Full Name: ${name}`,
    `📞 Phone: ${phone}`,
    `🏫 Academy: ${read(formData, "academy") || "—"}`,
    `📦 Plan: ${read(formData, "plan") || d.planUnsure}`,
    `🎓 Students: ${pick(d.optStudents, read(formData, "students"))}`,
    `🏢 Branches: ${pick(d.optBranches, read(formData, "branches"))}`,
    `🛠 Currently uses: ${pick(d.optNow, read(formData, "now"))}`,
    `🌐 Site language: ${LANG_NAMES[lang] ?? (lang || "—")}`,
  ].join("\n");

  try {
    // Без parse_mode: текст уходит как есть, экранировать ничего не нужно.
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      cache: "no-store",
    });
    const data = (await res.json()) as { ok: boolean; description?: string };
    if (!data.ok) {
      console.error("[lead] Telegram отклонил сообщение:", data.description);
      return { status: "error" };
    }
    return { status: "ok" };
  } catch (err) {
    console.error("[lead] Не удалось связаться с Telegram:", err);
    return { status: "error" };
  }
}
