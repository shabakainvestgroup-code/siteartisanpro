"use client";

import { useCurrency } from "@/lib/currency-context";
import { currencies, currencySymbols } from "@/lib/currency";

export default function CurrencySwitcher({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-line bg-surface p-0.5"
    >
      {currencies.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-pressed={currency === c}
          title={c}
          className={`rounded-full font-semibold transition-colors ${
            compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm"
          } ${
            currency === c
              ? "bg-ink text-surface"
              : "text-muted hover:text-ink"
          }`}
        >
          {compact ? currencySymbols[c] : `${c} ${currencySymbols[c]}`}
        </button>
      ))}
    </div>
  );
}
