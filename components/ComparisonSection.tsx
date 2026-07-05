import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function ComparisonSection({ d }: { d: Dict }) {
  return (
    <section id="comparison" className="bg-surface py-16 sm:py-24">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{d.comparison.eyebrow}</span>
          <h2 className="section-title">{d.comparison.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Sans site */}
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-muted">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-red-soft text-red">
                  <Icon name="cross" className="h-4 w-4" />
                </span>
                {d.comparison.withoutTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {d.comparison.without.map((row) => (
                  <li key={row} className="flex items-start gap-2.5 text-[15px] text-muted">
                    <Icon name="cross" className="mt-1 h-3.5 w-3.5 shrink-0 text-red/70" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Avec site */}
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border-2 border-green/30 bg-green-soft/50 p-6 sm:p-8">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-green text-white">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {d.comparison.withTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {d.comparison.with.map((row) => (
                  <li key={row} className="flex items-start gap-2.5 text-[15px] font-medium text-ink">
                    <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-green" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
