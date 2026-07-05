"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

const STORAGE_KEY = "sap-theme";

// Bascule clair / sombre. Le thème initial est posé par un script inline
// dans le <head> (voir layout) pour éviter tout flash au chargement ;
// ce composant se contente de synchroniser l'icône puis de basculer.
export default function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // stockage indisponible : le choix reste actif pour la session
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={mounted ? dark : undefined}
      title={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-blue hover:text-blue sm:h-9 sm:w-9"
    >
      {/* suppressHydrationWarning : l'icône dépend du thème résolu côté client */}
      <span suppressHydrationWarning>
        <Icon name={dark ? "sun" : "moon"} className="h-4 w-4" />
      </span>
    </button>
  );
}
