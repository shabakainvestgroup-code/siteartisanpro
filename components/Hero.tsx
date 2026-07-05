import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import Price from "./Price";
import HeroVisual from "./HeroVisual";
import AnimatedUnderline from "./AnimatedUnderline";
import Reveal from "./Reveal";

export default function Hero({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <section className="blueprint relative overflow-hidden">
      {/* Halos de couleur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(236 95 20 / 0.14), transparent)" }}
      />
      <div className="wrap grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
        <div>
          <Reveal>
            <span className="chip">{d.hero.badge}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              {d.hero.titleBefore}{" "}
              <span className="relative inline-block whitespace-nowrap text-blue">
                <Price />
                <AnimatedUnderline className="absolute -bottom-1.5 left-0 w-full text-orange" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {d.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`/${locale}#contact`} className="btn-primary">
                {d.hero.ctaPrimary}
              </a>
              <a href={`/${locale}#offer`} className="btn-secondary">
                {d.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 text-sm text-muted">{d.hero.mention}</p>
          </Reveal>
        </div>

        <Reveal delay={200} className="w-full pb-8 lg:justify-self-end">
          <HeroVisual mock={d.hero.mock} alt={d.photos.hero} />
        </Reveal>
      </div>
    </section>
  );
}
