"use client";

import { useCurrency } from "@/lib/currency-context";
import { formatPrice } from "@/lib/currency";

// Affiche « 99 € », « 99 $ » ou « 99 £ » selon la devise sélectionnée.
export default function Price({ className }: { className?: string }) {
  const { currency } = useCurrency();
  return <span className={className}>{formatPrice(currency)}</span>;
}
