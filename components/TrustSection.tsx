import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function TrustSection({ d }: { d: Dict }) {
  return (
    <section id="trust" className="wrap py-16 sm:py-24">
      <Reveal>
        <div className="blueprint relative overflow-hidden rounded-3xl bg-panel text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #2453cc, transparent)" }}
          />
          <div className="grid items-stretch lg:grid-cols-[1.2fr_0.8fr]">
            <div className="px-6 py-10 sm:px-12 sm:py-14">
              <span className="eyebrow !text-white/70 before:!bg-white/70">
                {d.trust.eyebrow}
              </span>
              <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
                {d.trust.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {d.trust.text}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {d.trust.points.map((point) => (
                  <li
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-56 lg:min-h-0">
              <Image
                src="/images/trust-artisan.jpg"
                alt={d.photos.trust}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-panel/40 to-transparent lg:bg-gradient-to-r lg:from-panel/50 lg:via-transparent lg:to-transparent"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
