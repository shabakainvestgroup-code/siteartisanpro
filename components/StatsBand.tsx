import type { Dict } from "@/lib/i18n";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function StatsBand({ d }: { d: Dict }) {
  return (
    <section className="border-y border-line bg-surface">
      <div className="wrap grid grid-cols-2 gap-6 py-12 sm:grid-cols-4 sm:py-14">
        {d.stats.items.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <p className="font-display text-4xl font-extrabold tracking-tight text-blue sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[16ch] text-sm leading-snug text-muted">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
