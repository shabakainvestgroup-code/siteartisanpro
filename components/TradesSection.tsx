import type { Dict } from "@/lib/i18n";
import { Icon, type IconKey } from "./icons";
import Reveal from "./Reveal";

export default function TradesSection({ d }: { d: Dict }) {
  return (
    <section id="trades" className="wrap py-16 sm:py-20">
      <Reveal>
        <span className="eyebrow">{d.trades.eyebrow}</span>
        <h2 className="section-title">{d.trades.title}</h2>
        <p className="section-text max-w-2xl">{d.trades.subtitle}</p>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {d.trades.items.map((t, i) => (
          <Reveal key={t.label} delay={Math.min(i * 40, 280)}>
            <li className="card group flex items-center gap-3 px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon name={t.icon as IconKey} className="h-5.5 w-5.5" />
              </span>
              <span className="text-sm font-semibold text-ink sm:text-base">
                {t.label}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
