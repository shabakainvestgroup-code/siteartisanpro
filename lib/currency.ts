// Configuration des devises.
// Le prix reste symboliquement identique (99) quelle que soit la devise :
// aucun taux de conversion n'est appliqué, seul le symbole change.

export const currencies = ["EUR", "USD", "GBP"] as const;
export type Currency = (typeof currencies)[number];

export const defaultCurrency: Currency = "EUR";

export const BASE_PRICE = 99;

export const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

export function formatPrice(currency: Currency, amount: number = BASE_PRICE): string {
  return `${amount} ${currencySymbols[currency]}`;
}
