import type { SVGProps } from "react";

// Icônes trait (24×24), cohérentes entre elles — métiers + options.

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const icons = {
  /* ---------- Métiers ---------- */
  bolt: (p: P) => (
    <Base {...p}>
      <path d="M13 2.5 4.8 13.4h6l-1 8.1 8.4-11.3h-6z" />
    </Base>
  ),
  droplet: (p: P) => (
    <Base {...p}>
      <path d="M12 3c3.2 3.7 6.3 7.2 6.3 10.7a6.3 6.3 0 0 1-12.6 0C5.7 10.2 8.8 6.7 12 3Z" />
      <path d="M9.5 14.5a2.8 2.8 0 0 0 2 2.6" />
    </Base>
  ),
  roller: (p: P) => (
    <Base {...p}>
      <rect x="4" y="3.5" width="13" height="5.5" rx="1.4" />
      <path d="M17 6h2.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H12a1 1 0 0 0-1 1v1.5" />
      <rect x="10" y="13.5" width="2" height="7" rx="0.8" />
    </Base>
  ),
  tiles: (p: P) => (
    <Base {...p}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </Base>
  ),
  bricks: (p: P) => (
    <Base {...p}>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="M3.5 10h17M3.5 14.5h17M9 5.5V10M15 5.5V10M12 10v4.5M6.5 14.5v4M17.5 14.5v4" />
    </Base>
  ),
  saw: (p: P) => (
    <Base {...p}>
      <path d="M3 14 13.5 3.5l4 4L7 18l-1 2.5L3.5 22 2 20.5l1.5-2.5z" />
      <path d="m10 7 2 2M7.5 9.5l2 2M5 12l2 2" />
    </Base>
  ),
  roof: (p: P) => (
    <Base {...p}>
      <path d="m3 11.5 9-7 9 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </Base>
  ),
  flame: (p: P) => (
    <Base {...p}>
      <path d="M12 21a6.4 6.4 0 0 1-6.4-6.4c0-3 2.1-5 3.6-7.1.7-1 1.3-2.2 1.6-3.5 2.2 1.6 7.6 6 7.6 10.6A6.4 6.4 0 0 1 12 21Z" />
      <path d="M12 21c-1.8 0-3.2-1.5-3.2-3.3S10.5 14.5 12 13c1.5 1.5 3.2 2.9 3.2 4.7S13.8 21 12 21Z" />
    </Base>
  ),
  key: (p: P) => (
    <Base {...p}>
      <circle cx="8" cy="8.5" r="4.5" />
      <path d="m11.3 11.8 8.2 8.2M16.5 17l2-2M13.5 14l1.8-1.8" />
    </Base>
  ),
  leaf: (p: P) => (
    <Base {...p}>
      <path d="M5 19c0-8 4-14 14-14 .5 9-3 14.5-11 14.5-1 0-2-.2-3-.5Z" />
      <path d="M5 19c3-5 6-8 10-10" />
    </Base>
  ),
  hammer: (p: P) => (
    <Base {...p}>
      <path d="M13.5 6 6 13.5l3 3L16.5 9" />
      <path d="M12 4.5 14.5 2l6 6-2.5 2.5zM6.8 14.3l-3.6 5A1.3 1.3 0 0 0 5 21.1l5-3.6" />
    </Base>
  ),

  /* ---------- Options & UI ---------- */
  inbox: (p: P) => (
    <Base {...p}>
      <path d="M4 13.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.5" />
      <path d="M4 13.5h4.5a3.5 3.5 0 0 0 7 0H20V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </Base>
  ),
  gallery: (p: P) => (
    <Base {...p}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m3.5 16.5 4.5-4 4 3.5 3.5-3 5 4" />
    </Base>
  ),
  search: (p: P) => (
    <Base {...p}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </Base>
  ),
  mappin: (p: P) => (
    <Base {...p}>
      <path d="M12 21.5S5 14.9 5 9.9a7 7 0 0 1 14 0c0 5-7 11.6-7 11.6Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </Base>
  ),
  shield: (p: P) => (
    <Base {...p}>
      <path d="M12 2.8 4.5 5.5v6c0 4.6 3.2 7.9 7.5 9.7 4.3-1.8 7.5-5.1 7.5-9.7v-6z" />
      <path d="m8.8 11.6 2.3 2.3 4.2-4.3" />
    </Base>
  ),
  share: (p: P) => (
    <Base {...p}>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="17.5" cy="5.5" r="2.6" />
      <circle cx="17.5" cy="18.5" r="2.6" />
      <path d="m8.4 10.7 6.8-4M8.4 13.3l6.8 4" />
    </Base>
  ),
  filePlus: (p: P) => (
    <Base {...p}>
      <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z" />
      <path d="M13.5 3v5.5H19M12 12v6M9 15h6" />
    </Base>
  ),
  pen: (p: P) => (
    <Base {...p}>
      <path d="m14.5 4.5 5 5L8 21H3v-5z" />
      <path d="m12 7 5 5" />
    </Base>
  ),
  camera: (p: P) => (
    <Base {...p}>
      <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </Base>
  ),
  chart: (p: P) => (
    <Base {...p}>
      <path d="M4 4v16h16" />
      <path d="m7.5 14.5 4-4.5 3 3 5-6" />
    </Base>
  ),

  phone: (p: P) => (
    <Base {...p}>
      <path d="M6.8 3.5h2.7l1.4 4-2 1.6a12.6 12.6 0 0 0 5.9 5.9l1.7-2 4 1.4v2.7a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.8 5.7a2 2 0 0 1 2-2.2Z" />
    </Base>
  ),
  whatsapp: (p: P) => (
    <Base {...p}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9.3 8.7c.9 2.9 3 5 5.9 5.9l.9-1.6 2 .9c-.3 1.6-1.6 2.3-3.1 1.9-3.4-.9-6-3.5-6.9-6.9-.4-1.5.3-2.8 1.9-3.1l.9 2z" />
    </Base>
  ),
  whatsappFill: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  ),
  check: (p: P) => (
    <Base {...p} strokeWidth={2.4}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Base>
  ),
  cross: (p: P) => (
    <Base {...p} strokeWidth={2.2}>
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
    </Base>
  ),
  plus: (p: P) => (
    <Base {...p} strokeWidth={2.2}>
      <path d="M12 5v14M5 12h14" />
    </Base>
  ),
  arrow: (p: P) => (
    <Base {...p} strokeWidth={2.2}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </Base>
  ),
  star: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.4 1.1 6.3L12 17.2l-5.7 3 1.1-6.3L2.8 9.5l6.4-.9z" />
    </svg>
  ),
  sun: (p: P) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </Base>
  ),
  moon: (p: P) => (
    <Base {...p}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </Base>
  ),
  mail: (p: P) => (
    <Base {...p}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Base>
  ),
} as const;

export type IconKey = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Cmp = icons[name];
  return <Cmp className={className} />;
}
