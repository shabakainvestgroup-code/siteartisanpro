import fr from "./fr";
import en from "./en";
import { type Locale } from "./config";

export type Dict = typeof fr;

const dictionaries: Record<Locale, Dict> = {
  fr,
  // Le cast garantit la même structure que le dictionnaire français,
  // TypeScript signalera toute clé manquante côté anglais.
  en: en as unknown as Dict,
};

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

export { locales, defaultLocale, isLocale, type Locale } from "./config";
