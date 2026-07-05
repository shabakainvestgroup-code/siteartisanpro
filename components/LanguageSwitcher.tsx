import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <nav
      aria-label={label}
      className="inline-flex items-center rounded-full border border-line bg-surface p-0.5"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
            l === locale ? "bg-blue text-white" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
