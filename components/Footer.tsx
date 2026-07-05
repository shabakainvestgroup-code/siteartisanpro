import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import CurrencySwitcher from "./CurrencySwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icon } from "./icons";

export default function Footer({ d, locale }: { d: Dict; locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div>
          <Link href={`/${locale}`} className="inline-block">
            <Image
              src={locale === "fr" ? "/logo-fr.png" : "/logo-en.png"}
              alt={d.brand}
              width={1739}
              height={482}
              className="h-12 w-auto object-contain object-left"
            />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {d.footer.tagline}
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {d.footer.contactTitle}
          </p>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li>
              <a
                href={`https://wa.me/${d.footer.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-ink hover:text-green"
              >
                <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-green" />
                {d.footer.whatsapp}
              </a>
              <p className="ml-6 text-xs text-muted">{d.footer.whatsappLabel}</p>
            </li>
            <li className="flex items-start gap-2 font-medium text-ink">
              <Icon name="mappin" className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              {d.footer.address}
            </li>
          </ul>
        </div>

        {/* Liens légaux */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {d.footer.linksTitle}
          </p>
          <ul className="mt-3 space-y-2.5 text-sm">
            {d.footer.links.map((link) => (
              <li key={link.slug}>
                <Link
                  href={`/${locale}/${link.slug}`}
                  className="font-medium text-ink hover:text-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Préférences */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {d.footer.settingsTitle}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <LanguageSwitcher locale={locale} label={d.nav.langLabel} />
            <CurrencySwitcher label={d.nav.currencyLabel} />
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year} {d.brand}. {d.footer.rights}
          </p>
          <p>{d.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
