import { notFound } from "next/navigation";
import { getDict, isLocale } from "@/lib/i18n";
import Hero from "@/components/Hero";
import TradesSection from "@/components/TradesSection";
import StatsBand from "@/components/StatsBand";
import OfferSection from "@/components/OfferSection";
import OptionsSection from "@/components/OptionsSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import FinalCta from "@/components/FinalCta";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);

  // Données structurées FAQ pour le SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero d={d} locale={locale} />
      <TradesSection d={d} />
      <StatsBand d={d} />
      <OfferSection d={d} locale={locale} />
      <OptionsSection d={d} />
      <ProcessSection d={d} />
      <BenefitsSection d={d} />
      <ComparisonSection d={d} />
      <TrustSection d={d} />
      <FaqSection d={d} />
      <ContactSection d={d} locale={locale} />
      <FinalCta d={d} locale={locale} />
    </>
  );
}
