import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./lib/i18n/config";

function detectLocale(req: NextRequest): Locale {
  const header = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const first = header.split(",")[0]?.trim() ?? "";
  if (first.startsWith("fr")) return "fr";
  if (first.startsWith("en")) return "en";
  if (header.includes("fr")) return "fr";
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Tout sauf les assets, l'API et les fichiers statiques
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
