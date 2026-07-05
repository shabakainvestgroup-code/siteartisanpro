"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import CurrencySwitcher from "./CurrencySwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./icons";

export default function Header({ d, locale }: { d: Dict; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchor = (href: string) => `/${locale}${href}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_var(--color-line),0_8px_24px_-16px_rgb(22_35_59/0.25)]"
          : "bg-paper"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-3">
        {/* Marque */}
        <Link href={`/${locale}`} className="flex min-w-0 shrink items-center">
          <Image
            src={locale === "fr" ? "/logo-fr.png" : "/logo-en.png"}
            alt={d.brand}
            width={1739}
            height={482}
            priority
            className="h-9 w-auto max-w-full object-contain object-left sm:h-11"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation">
          {d.nav.items.map((item) => (
            <a
              key={item.href}
              href={anchor(item.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="hidden md:block">
            <CurrencySwitcher label={d.nav.currencyLabel} compact />
          </div>
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} label={d.nav.langLabel} />
          </div>
          <ThemeToggle label={d.nav.themeLabel} />
          <a
            href={anchor("#contact")}
            className="btn-primary whitespace-nowrap !px-3 !py-2 text-xs sm:!px-4 sm:text-sm"
          >
            {d.nav.cta}
          </a>
          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? d.nav.menuClose : d.nav.menuOpen}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-ink sm:h-9 sm:w-9 lg:hidden"
          >
            <Icon name={open ? "cross" : "plus"} className={`h-4 w-4 transition-transform ${open ? "" : "rotate-0"}`} />
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Navigation mobile">
            {d.nav.items.map((item) => (
              <a
                key={item.href}
                href={anchor(item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-base font-medium text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between py-3 sm:hidden">
              <span className="text-sm font-medium text-muted">
                {d.nav.langLabel}
              </span>
              <LanguageSwitcher locale={locale} label={d.nav.langLabel} />
            </div>
            <div className="flex items-center justify-between py-3 md:hidden">
              <span className="text-sm font-medium text-muted">
                {d.nav.currencyLabel}
              </span>
              <CurrencySwitcher label={d.nav.currencyLabel} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
