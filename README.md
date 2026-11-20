# Omuz — лендинг

Next.js (App Router, TypeScript), стили — CSS Modules + `src/app/[lang]/globals.css`.
Перенесён из макета `Main.dc.html` (архив `Omuz landing page-html.zip`).

## Запуск

```bash
npm install
npm run dev     # http://localhost:3000 → редирект на /tg
npm run build
npm run lint
```

Переменная окружения `NEXT_PUBLIC_SITE_URL` — боевой домен для canonical, hreflang, Open Graph и sitemap.

## Языки

Маршруты `/tg`, `/ru`, `/en`. Тексты лежат в `src/content/{tg,ru,en}.ts` по общему типу `src/content/types.ts`.
Данные, одинаковые для всех языков (контакты, ссылки на сторы, видео, картинки, демо-данные hero), — в `src/content/common.ts`.
Цены и правила калькулятора — в `src/lib/pricing.ts`.

## TODO

- Форма заявки (`src/components/DemoForm.tsx`) ничего не отправляет — подключить бэкенд или почту.
- Статистика McKinsey 2020 / Imperial College 2019 / HBR 2011 — проверить источники, при необходимости заменить локальными данными (`src/content/*.ts`, поле `stats`).
- Отдельная OG-картинка 1200×630 (сейчас скриншот панели).
- Подписи для скринридеров на таджикском — проверить носителем.
