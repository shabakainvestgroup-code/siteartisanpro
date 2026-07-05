import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { Icon } from "./icons";
import Price from "./Price";
import Reveal from "./Reveal";

export default function OfferSection({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section id="offer" className="bg-surface py-16 sm:py-24">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal className="lg:sticky lg:top-24">
          <span className="eyebrow">{d.offer.eyebrow}</span>
          <h2 className="section-title">{d.offer.title}</h2>
          <p className="section-text">{d.offer.text}</p>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src="/images/offer-artisan.jpg"
              alt={d.photos.offer}
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 480px, 90vw"
              className="aspect-[16/10] w-full object-cover object-[center_25%]"
            />
          </div>
          <p className="mt-4 rounded-2xl border border-line bg-paper px-5 py-4 text-sm leading-relaxed text-muted">
            {d.offer.note}
          </p>
        </Reveal>

        {/* Grande carte prix */}
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl bg-panel p-7 text-white shadow-[var(--shadow-pop)] sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-2xl"
              style={{ background: "radial-gradient(closest-side, #ec5f14, transparent)" }}
            />
            <p className="font-display text-xl font-bold sm:text-2xl">
              {d.offer.planName}
            </p>
            <p className="mt-4 flex items-baseline gap-2.5">
              <span className="text-sm font-medium text-white/60">
                {d.offer.fromLabel}
              </span>
              <Price className="font-display text-5xl font-extrabold tracking-tight text-orange sm:text-6xl" />
            </p>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              {d.offer.includedTitle}
            </p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {d.offer.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={`/${locale}#contact`}
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              {d.offer.cta}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
