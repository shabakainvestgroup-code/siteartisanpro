import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import Price from "./Price";
import Reveal from "./Reveal";

export default function FinalCta({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section className="wrap pb-16 pt-4 sm:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-panel px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #ec5f14, transparent)" }}
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            {d.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {d.finalCta.text}
          </p>
          <a href={`/${locale}#contact`} className="btn-primary mt-8">
            {d.finalCta.buttonBefore} <Price />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
