"use server";

import { cookies } from "next/headers";
import { isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

// Guarda el idioma elegido y fuerza re-render de la página.
export async function setLocale(locale: Locale) {
  if (!isLocale(locale)) return;
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
