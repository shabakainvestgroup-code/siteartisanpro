import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function BenefitsSection({ d }: { d: Dict }) {
  return (
    <section id="benefits" className="wrap py-16 sm:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="lg:sticky lg:top-24">
          <span className="eyebrow">{d.benefits.eyebrow}</span>
          <h2 className="section-title">{d.benefits.title}</h2>
          <div className="mt-8 hidden overflow-hidden rounded-3xl lg:block">
            <Image
              src="/images/benefits-artisan.jpg"
              alt={d.photos.benefits}
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 460px, 90vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {d.benefits.items.map((item, i) => (
            <Reveal key={item} delay={Math.min((i % 3) * 60, 180)}>
              <li className="card flex h-full items-start gap-3 px-5 py-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-soft text-green">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] font-medium leading-relaxed text-ink">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
