export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";
export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}
