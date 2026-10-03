import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, getProjectBySlug } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";

export function generateStaticParams() {
  return getDictionary("es").projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const project = getProjectBySlug(slug, locale);
  const labels = dict.slugPage;

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-24">
      <Link
        href="/work"
        className="text-sm tracking-[0.12em] text-muted transition-colors hover:text-ink"
      >
        {labels.backToWork}
      </Link>

      <p className="mt-10 text-xs tracking-[0.2em] text-muted">{project.number}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-sm text-muted">{project.subtitle}</p>
      <p className="mt-6 text-[10px] font-medium tracking-[0.18em] text-accent">
        {project.status}
      </p>

      <div className="mt-16 space-y-12 border-t border-line pt-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {labels.problem}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {labels.analyze}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {project.analysis}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {labels.solution}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {project.solution}
          </p>
        </section>
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
          {labels.technologies}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="border border-line px-2 py-0.5 text-[10px] tracking-wide text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
