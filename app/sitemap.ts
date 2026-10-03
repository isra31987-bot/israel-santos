import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/data/site";

// Rutas que Google debe indexar. Se regenera en cada build.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/approach", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/cv", priority: 0.6 },
    { path: "/experiments", priority: 0.4 },
    { path: "/privacy", priority: 0.3 },
  ];

  const projectRoutes = projects.map((project) => ({
    path: `/work/${project.slug}`,
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
