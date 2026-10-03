import Link from "next/link";

type Project = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: string;
};

export default function ProjectCard({
  project,
  viewCaseLabel,
}: {
  project: Project;
  viewCaseLabel: string;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/work/${project.slug}`}
        className="project-card-link"
        aria-label={`${viewCaseLabel}: ${project.title}`}
      >
        <div className="project-card-body">
          <div className="project-card-copy">
            <p className="project-card-number">{project.number}</p>
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-subtitle">{project.subtitle}</p>
            <p className="project-card-description">{project.description}</p>
          </div>

          <div className="project-card-meta">
            <p className="project-card-status">{project.status}</p>
            <ul className="project-card-tags">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <span className="project-card-cta">
              {viewCaseLabel}
              <span className="project-card-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
