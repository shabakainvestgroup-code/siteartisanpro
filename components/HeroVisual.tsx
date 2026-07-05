import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";

// Visuel du hero : vraie photo d'artisan + badges de preuve sociale
// + carte de contact façon mini-site, pour humaniser la promesse.
export default function HeroVisual({
  mock,
  alt,
}: {
  mock: Dict["hero"]["mock"];
  alt: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* Halo décoratif */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(36 83 204 / 0.16), transparent 70%)",
        }}
      />

      {/* Photo principale */}
      <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-pop)]">
        <Image
          src="/images/hero-artisan.jpg"
          alt={alt}
          width={1400}
          height={2100}
          priority
          sizes="(min-width: 1024px) 420px, 90vw"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      {/* Badge flottant : note */}
      <div className="float-soft absolute -left-3 top-6 z-10 flex items-center gap-1.5 rounded-full bg-surface px-3 py-2 text-xs font-bold text-ink shadow-[var(--shadow-pop)] sm:-left-6">
        <Icon name="star" className="h-3.5 w-3.5 text-orange" />
        {mock.rating}
      </div>

      {/* Badge flottant : demandes */}
      <div
        className="float-soft absolute -right-3 top-1/3 z-10 flex items-center gap-1.5 rounded-full bg-surface px-3 py-2 text-xs font-bold text-green shadow-[var(--shadow-pop)] sm:-right-6"
        style={{ animationDelay: "1.2s" }}
      >
        <Icon name="chart" className="h-3.5 w-3.5" />
        {mock.stat}
      </div>

      {/* Carte de contact façon mini-site */}
      <div className="absolute inset-x-3 -bottom-6 rounded-2xl border border-line bg-surface/95 p-3.5 shadow-[var(--shadow-pop)] backdrop-blur-sm sm:inset-x-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue text-white">
            <Icon name="bolt" className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold text-ink">
              {mock.name}
            </p>
            <p className="truncate text-[11px] text-muted">{mock.trade}</p>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <span className="flex items-center justify-center gap-1.5 rounded-full bg-orange py-1.5 text-[11px] font-bold text-white">
            <Icon name="phone" className="h-3.5 w-3.5" />
            {mock.call}
          </span>
          <span className="flex items-center justify-center gap-1.5 rounded-full bg-green py-1.5 text-[11px] font-bold text-white">
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            {mock.whatsapp}
          </span>
        </div>
      </div>
    </div>
  );
}
