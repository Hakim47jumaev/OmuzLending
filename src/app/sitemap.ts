import type { MetadataRoute } from "next";
import { getContent, LOCALES } from "@/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((l) => [getContent(l).htmlLang, `${SITE_URL}/${l}`]));
  return LOCALES.map((l) => ({
    url: `${SITE_URL}/${l}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
