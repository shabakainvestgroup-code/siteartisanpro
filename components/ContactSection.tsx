"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { currencies, currencySymbols } from "@/lib/currency";
import { useCurrency } from "@/lib/currency-context";
import { Icon } from "./icons";
import Reveal from "./Reveal";

type Status = "idle" | "success";

const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-ink " +
  "placeholder:text-muted/60 transition-colors focus:border-blue focus:outline-none " +
  "focus:ring-2 focus:ring-blue/20";

export default function ContactSection({
  d,
  locale,
}: {
  d: Dict;
  locale: Locale;
}) {
  const { currency } = useCurrency();
  const [status, setStatus] = useState<Status>("idle");
  const c = d.contact;
  const f = c.fields;
  const whatsappNumber = d.footer.whatsapp.replace(/[^0-9]/g, "");

  // Construit le lien WhatsApp (wa.me) à partir des champs remplis.
  function buildWhatsAppUrl(data: Record<string, string>): string {
    const line = (label: string, value?: string) =>
      value && value.trim() ? `${label} : ${value.trim()}` : null;

    const lines = [
      c.msgIntro,
      "",
      line(f.name, data.name),
      line(f.company, data.company),
      line(f.trade, data.trade),
      line(f.country, data.country),
      line(f.phone, data.phone),
      line(f.email, data.email),
      line(f.currency, data.currency),
      line(f.language, data.language),
      line(f.option, data.option),
      line(f.message, data.message),
    ].filter((l) => l !== null);

    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;

    // Piège anti-spam : si le champ caché est rempli, on n'ouvre rien.
    if (data.website) return;

    const url = buildWhatsAppUrl(data);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    // Repli si le navigateur bloque l'ouverture d'onglet.
    if (!win) window.location.href = url;

    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="blueprint bg-blue-soft/40 py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-text">{c.text}</p>
        </Reveal>

        <Reveal delay={120}>
          {status === "success" ? (
            <div
              role="status"
              className="card mt-10 flex flex-col items-center gap-4 px-6 py-12 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-green-soft text-green">
                <Icon name="whatsappFill" className="h-7 w-7" />
              </span>
              <p className="font-display text-xl font-bold text-ink">
                {c.successTitle}
              </p>
              <p className="max-w-md text-[15px] leading-relaxed text-muted">
                {c.success}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-secondary mt-1 text-sm"
              >
                {c.successAgain}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card mt-10 p-6 sm:p-8"
              noValidate={false}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.name} *
                  </label>
                  <input id="f-name" name="name" required autoComplete="name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-company" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.company}
                  </label>
                  <input id="f-company" name="company" autoComplete="organization" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-trade" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.trade} *
                  </label>
                  <select id="f-trade" name="trade" required defaultValue="" className={inputCls}>
                    <option value="" disabled>
                      {c.fields.tradePlaceholder}
                    </option>
                    {d.trades.items.map((t) => (
                      <option key={t.label} value={t.label}>
                        {t.label}
                      </option>
                    ))}
                    <option value={c.fields.tradeOther}>{c.fields.tradeOther}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="f-country" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.country} *
                  </label>
                  <input id="f-country" name="country" required autoComplete="country-name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.phone} *
                  </label>
                  <input id="f-phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.email} *
                  </label>
                  <input id="f-email" name="email" type="email" required autoComplete="email" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="f-currency" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.currency}
                  </label>
                  <select id="f-currency" name="currency" defaultValue={currency} key={currency} className={inputCls}>
                    {currencies.map((cur) => (
                      <option key={cur} value={cur}>
                        {cur} ({currencySymbols[cur]})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="f-language" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.language}
                  </label>
                  <select id="f-language" name="language" defaultValue={locale} className={inputCls}>
                    {c.languages.map((l) => (
                      <option key={l.value} value={l.value}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-option" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.option}
                  </label>
                  <select id="f-option" name="option" defaultValue={c.options[0]} className={inputCls}>
                    {c.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className="mb-1.5 block text-sm font-semibold text-ink">
                    {c.fields.message}
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    placeholder={c.fields.messagePlaceholder}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Piège anti-spam : champ invisible pour les humains */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <p className="text-xs text-muted">* {c.requiredHint}</p>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                    rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white
                    shadow-[0_4px_14px_-2px_rgb(37_211_102/0.5)] transition-all duration-200
                    hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Icon name="whatsappFill" className="h-5 w-5" />
                  {c.submit}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
