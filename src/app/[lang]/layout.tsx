import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, getContent, hasLocale, LOCALES } from "@/content";
import { BRAND, IMAGES } from "@/content/common";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Кириллица и cyrillic-ext нужны для таджикских букв (ҳ, ҷ, ӣ, ӯ, қ, ғ).
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#4A3AFF",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getContent(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: BRAND,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [getContent(l).htmlLang, `/${l}`])),
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: BRAND,
      url: `/${lang}`,
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => getContent(l).meta.ogLocale),
      // TODO: подготовить отдельную OG-картинку 1200×630; пока используется скриншот панели из макета.
      images: [{ url: IMAGES.dash.src, width: IMAGES.dash.width, height: IMAGES.dash.height, alt: BRAND }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [IMAGES.dash.src],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={getContent(lang).htmlLang} className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
