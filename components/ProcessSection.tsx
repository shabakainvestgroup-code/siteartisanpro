import type { Dict } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function ProcessSection({ d }: { d: Dict }) {
  return (
    <section id="process" className="blueprint bg-blue-soft/40 py-16 sm:py-24">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{d.process.eyebrow}</span>
          <h2 className="section-title">{d.process.title}</h2>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-5">
          {d.process.steps.map((step, i) => (
            <Reveal key={step} delay={Math.min(i * 90, 360)}>
              <li className="card relative h-full p-5 pt-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-5 grid h-8 w-8 place-items-center rounded-full bg-blue font-display text-sm font-bold text-white shadow-[var(--shadow-card)]"
                >
                  {i + 1}
                </span>
                <p className="text-sm font-semibold leading-relaxed text-ink sm:text-[15px]">
                  {step}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
