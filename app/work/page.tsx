import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.work.label,
    description: dict.metadata.workDescription,
    path: "/work",
    locale,
    name: dict.profile.name,
  });
}

export default async function WorkPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
        {dict.work.label}
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
        {dict.work.heading}
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{dict.work.intro}</p>

      <div className="mt-16">
        {dict.projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            viewCaseLabel={dict.work.viewCase}
          />
        ))}
      </div>
    </section>
  );
}
