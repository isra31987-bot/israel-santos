// Re-exporta datos en español por compatibilidad con imports legacy.
// Preferir getDictionary(locale) en código nuevo.

import { es } from "@/i18n/messages/es";

export const profile = es.profile;
export const projects = es.projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
