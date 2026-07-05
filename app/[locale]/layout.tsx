import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { getDict, isLocale, locales, type Locale } from "@/lib/i18n";
import { MotionConfig } from "motion/react";
import { CurrencyProvider } from "@/lib/currency-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "../globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: d.brand,
      title: d.meta.title,
      description: d.meta.description,
      url: `/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale as Locale);

  // Pose la classe .dark avant le premier rendu pour éviter tout flash.
  const themeScript = `(function(){try{var t=localStorage.getItem('sap-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <CurrencyProvider>
          <MotionConfig reducedMotion="user">
            <Header d={d} locale={locale} />
            <main>{children}</main>
            <Footer d={d} locale={locale} />
            <WhatsAppFloat d={d} />
          </MotionConfig>
        </CurrencyProvider>
      </body>
    </html>
  );
}
