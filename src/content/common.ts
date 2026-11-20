// Данные, одинаковые для всех языков: контакты, ссылки, бренды, картинки, демо-данные.

export const CONTACTS = {
  phone: "+992 900 73 77 04",
  phoneHref: "tel:+992900737704",
  instagram: "@omuztj",
  instagramLabel: "Instagram",
  instagramHref: "https://instagram.com/omuztj",
} as const;

export const STORES = {
  appStore: {
    href: "https://apps.apple.com/us/app/omuz-crm/id6801092459",
    small: "Download on the",
    label: "App Store",
  },
  googlePlay: {
    href: "https://play.google.com/store/apps/details?id=tj.omuz.crm&hl=en",
    small: "GET IT ON",
    label: "Google Play",
  },
} as const;

export const VIDEO = {
  src: "https://kinescope.io/embed/ky9MkcYZbM2gSSJf5r1QkY",
  title: "Omuz",
} as const;

export const BRAND = "Omuz";

/** Скриншоты продукта (вынесены из base64 макета в public/images). */
export const IMAGES = {
  dash: { src: "/images/dash.webp", width: 1300, height: 1717 },
  stud: { src: "/images/stud.webp", width: 1300, height: 924 },
  jour: { src: "/images/jour.webp", width: 1300, height: 924 },
  mdash: { src: "/images/mdash.webp", width: 360, height: 800 },
  mjour: { src: "/images/mjour.webp", width: 360, height: 1232 },
} as const;

/** Карточка-журнал в hero: пример данных из макета (не переводится). */
export const HERO_REGISTER = {
  title: "Omuz · Frontend 3-B",
  live: "live",
  days: ["12", "13", "14", "15", "16"],
  currency: "TJS",
  progress: 92,
  chip: "+350 TJS",
  /** p — присутствовал, a — отсутствовал, g — оценка «5». */
  rows: [
    { name: "Farrukh", cells: ["p", "p", "p", "g", "p"], pay: "350", paid: true },
    { name: "Madina", cells: ["p", "g", "p", "p", "p"], pay: "350", paid: true },
    { name: "Rustam", cells: ["p", "a", "p", "p", "g"], pay: "350", paid: false },
    { name: "Zarina", cells: ["p", "p", "g", "p", "p"], pay: "750", paid: true },
    { name: "Sherzod", cells: ["g", "p", "p", "a", "p"], pay: "350", paid: true },
    { name: "Nilufar", cells: ["p", "p", "p", "p", "g"], pay: "350", paid: false },
  ],
} as const;
