"use client";

import Link from "next/link";
import { useDictionary } from "@/components/DictionaryProvider";
import type { SelectedProject } from "@/i18n/types";

/** Flujo horizontal — misma estructura en los 4 proyectos */
function ProjectWorkflow({
  steps,
  ariaLabel,
}: {
  steps: string[];
  ariaLabel: string;
}) {
  if (steps.length === 0) return null;

  return (
    <div className="project-workflow project-workflow--horizontal" aria-label={ariaLabel}>
      {steps.map((step, index) => (
        <span key={step} className="project-workflow-step">
          {index > 0 && (
            <span className="project-workflow-arrow" aria-hidden="true">
              →
            </span>
          )}
          <span className="project-workflow-label">{step}</span>
        </span>
      ))}
    </div>
  );
}

function ProjectFeature({
  project,
  viewCase,
  workflowAria,
}: {
  project: SelectedProject;
  viewCase: string;
  workflowAria: string;
}) {
  return (
    <article className="selected-project group selected-project--large selected-project--text-only">
      <Link
        href={`/work/${project.slug}`}
        className="selected-project-link"
        aria-label={`${viewCase}: ${project.title}`}
      >
        <div className="selected-project-meta">
          <p className="selected-project-number">{project.number}</p>
          <p className="selected-project-category">{project.category}</p>
        </div>

        <div className="selected-project-body">
          <ProjectWorkflow steps={project.workflow} ariaLabel={workflowAria} />

          <div className="selected-project-copy">
            <h3 className="selected-project-title selected-project-title--link">
              {project.title}
            </h3>
            <p className="selected-project-subtitle">{project.subtitle}</p>
            <p className="selected-project-description">{project.description}</p>
            {project.context && (
              <p className="selected-project-context">{project.context}</p>
            )}

            <ul className="selected-project-tags">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <p className="selected-project-status">{project.status}</p>

            <span className="selected-project-cta">
              {viewCase}
              <span className="selected-project-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function SelectedWorkSection() {
  const { dict } = useDictionary();

  return (
    <section
      className="selected-work-section border-t border-line"
      aria-labelledby="selected-work-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <header className="selected-work-header">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {dict.selectedWork.label}
          </p>
          <h2
            id="selected-work-heading"
            className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            {dict.selectedWork.heading[0]}
            <br />
            {dict.selectedWork.heading[1]}
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            {dict.selectedWork.supporting}
          </p>
        </header>

        <div className="selected-work-grid">
          {dict.selectedProjects.map((project) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              viewCase={dict.selectedWork.viewCase}
              workflowAria={dict.selectedWork.workflowAria}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
