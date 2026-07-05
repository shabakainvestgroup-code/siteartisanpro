import type { MetadataRoute } from "next";
import { getDict, locales } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}`])
      ),
    },
  }));

  const legal = locales.flatMap((locale) => {
    const d = getDict(locale);
    return Object.keys(d.legalPages).map((slug) => ({
      url: `${siteUrl}/${locale}/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }));
  });

  return [...home, ...legal];
}
