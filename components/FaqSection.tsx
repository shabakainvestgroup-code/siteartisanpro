import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";
import Reveal from "./Reveal";

// Accordéon basé sur <details>/<summary> : accessible au clavier sans JavaScript.
export default function FaqSection({ d }: { d: Dict }) {
  return (
    <section id="faq" className="bg-surface py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        <Reveal>
          <span className="eyebrow">{d.faq.eyebrow}</span>
          <h2 className="section-title">{d.faq.title}</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {d.faq.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 40, 240)}>
              <details className="faq-item card group px-5 sm:px-6">
                <summary className="flex items-center justify-between gap-4 py-4 sm:py-5">
                  <span className="font-display text-[15px] font-bold text-ink sm:text-base">
                    {item.q}
                  </span>
                  <span className="faq-chevron grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-soft text-blue">
                    <Icon name="plus" className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <div className="faq-answer">
                  <div>
                    <p className="pb-5 text-[15px] leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
