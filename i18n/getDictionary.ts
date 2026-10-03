import type { Locale } from "@/i18n/config";
import { en } from "@/i18n/messages/en";
import { es } from "@/i18n/messages/es";
import type { Dictionary } from "@/i18n/types";

const dictionaries = { es, en } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getProjectBySlug(slug: string, locale: Locale) {
  return getDictionary(locale).projects.find((p) => p.slug === slug);
}
