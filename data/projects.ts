import { es } from "@/i18n/messages/es";

export const projects = es.projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
