import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict, isLocale, locales } from "@/lib/i18n";

// Pages légales : mentions légales, confidentialité, conditions générales.

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const d = getDict(locale);
    return Object.keys(d.legalPages).map((slug) => ({ locale, slug }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  const page = d.legalPages[slug as keyof typeof d.legalPages];
  if (!page) return {};
  return {
    title: `${page.title} — ${d.brand}`,
    robots: { index: false },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const page = d.legalPages[slug as keyof typeof d.legalPages];
  if (!page) notFound();

  return (
    <article className="wrap max-w-3xl py-14 sm:py-20">
      <Link
        href={`/${locale}`}
        className="text-sm font-semibold text-blue hover:underline"
      >
        ← {d.brand}
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
        {page.title}
      </h1>
      <div className="mt-8 space-y-4">
        {page.body.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
