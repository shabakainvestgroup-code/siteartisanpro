import type { Dict } from "@/lib/i18n";
import { Icon, type IconKey } from "./icons";
import Reveal from "./Reveal";

export default function OptionsSection({ d }: { d: Dict }) {
  return (
    <section id="options" className="wrap py-16 sm:py-24">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">{d.options.eyebrow}</span>
        <h2 className="section-title">{d.options.title}</h2>
        <p className="section-text">{d.options.text}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.options.items.map((opt, i) => (
          <Reveal key={opt.title} delay={Math.min((i % 3) * 70, 210)}>
            <article className="card group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange/40">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-soft text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                <Icon name={opt.icon as IconKey} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {opt.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {opt.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
