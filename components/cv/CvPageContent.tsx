"use client";

import Link from "next/link";
import TrackLink from "@/components/TrackLink";
import { useDictionary } from "@/components/DictionaryProvider";
import { CV_PDF_HREF } from "@/data/site";

function CvBullets({ items }: { items: string[] }) {
  return (
    <ul className="cv-bullets">
      {items.map((item) => (
        <li key={item.slice(0, 48)}>{item}</li>
      ))}
    </ul>
  );
}

export default function CvPageContent() {
  const { dict } = useDictionary();
  const c = dict.cv;
  const email = dict.profile.email;

  return (
    <>
      <article className="cv-document mx-auto w-full max-w-4xl px-6 py-12 lg:py-16">
        {/* 01 — Header */}
        <header className="cv-header-block">
          <h1 className="cv-name">{c.header.name}</h1>
          <p className="cv-role">{c.header.title}</p>
          <p className="cv-tagline">{c.header.tagline}</p>
          <ul className="cv-contact-row">
            <li>
              <span className="cv-contact-label">{c.header.emailLabel}</span>{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <span className="cv-contact-label">{c.header.linkedinLabel}</span>{" "}
              <span className="cv-contact-placeholder">{c.header.linkedinPlaceholder}</span>
            </li>
            <li>
              <Link href="/">{c.header.portfolioLabel}</Link>
            </li>
          </ul>
        </header>

        {/* 02 — Profile */}
        <section className="cv-block" aria-labelledby="cv-profile-heading">
          <h2 id="cv-profile-heading" className="cv-block-heading">
            {c.profile.heading}
          </h2>
          <div className="cv-prose">
            {c.profile.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        {/* 03 — Logistics */}
        <section className="cv-block" aria-labelledby="cv-logistics-heading">
          <h2 id="cv-logistics-heading" className="cv-block-heading">
            {c.logistics.heading}
          </h2>
          <div className="cv-meta">
            <p className="cv-meta-line">{c.logistics.companyLine}</p>
            <p className="cv-meta-dates">{c.logistics.dates}</p>
          </div>
          <p className="cv-subheading">{c.logistics.subheading}</p>
          <p className="cv-intro">{c.logistics.intro}</p>
          <CvBullets items={c.logistics.bullets} />
          <blockquote className="cv-highlight">{c.logistics.highlight}</blockquote>
        </section>

        {/* 04 — Amazon */}
        <section className="cv-block" aria-labelledby="cv-amazon-heading">
          <h2 id="cv-amazon-heading" className="cv-block-heading">
            {c.amazon.heading}
          </h2>
          <p className="cv-meta-line">{c.amazon.companyLine}</p>
          <p className="cv-subheading">{c.amazon.subheading}</p>
          <p className="cv-intro">{c.amazon.intro}</p>
          <CvBullets items={c.amazon.bullets} />
        </section>

        {/* 05 — Digital projects */}
        <section className="cv-block" aria-labelledby="cv-projects-heading">
          <h2 id="cv-projects-heading" className="cv-block-heading">
            {c.projects.heading}
          </h2>
          <div className="cv-project-list">
            {c.projects.items.map((project) => (
              <article key={project.slug} className="cv-project-entry">
                <p className="cv-project-num">{project.number}</p>
                <h3 className="cv-project-title">{project.title}</h3>
                <p className="cv-project-tech">{project.technology}</p>
                {project.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="cv-project-desc">
                    {paragraph}
                  </p>
                ))}
                <p className="cv-project-descriptor">{project.descriptor}</p>
                <Link href={`/work/${project.slug}`} className="cv-project-link">
                  {c.projects.viewCase}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* 06 — Capabilities */}
        <section className="cv-block" aria-labelledby="cv-capabilities-heading">
          <h2 id="cv-capabilities-heading" className="cv-block-heading">
            {c.capabilities.heading}
          </h2>
          <div className="cv-capabilities-grid">
            {c.capabilities.items.map((item) => (
              <article key={item.title} className="cv-capability">
                <h3 className="cv-capability-title">{item.title}</h3>
                <p className="cv-capability-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 07 — Technology */}
        <section className="cv-block" aria-labelledby="cv-tech-heading">
          <h2 id="cv-tech-heading" className="cv-block-heading">
            {c.technology.heading}
          </h2>
          <div className="cv-tech-groups">
            {c.technology.groups.map((group) => (
              <div key={group.title} className="cv-tech-group">
                <h3 className="cv-tech-group-title">{group.title}</h3>
                <ul className="cv-tech-items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 08 — Education */}
        <section className="cv-block cv-block-compact" aria-labelledby="cv-education-heading">
          <h2 id="cv-education-heading" className="cv-block-heading">
            {c.education.heading}
          </h2>
          <ul className="cv-education-list">
            {c.education.items.map((item) => (
              <li key={item.title} className="cv-education-item">
                <p className="cv-education-title">{item.title}</p>
                {item.subtitle && <p className="cv-education-sub">{item.subtitle}</p>}
              </li>
            ))}
          </ul>
        </section>

        {/* 09 — Languages */}
        <section className="cv-block cv-block-compact" aria-labelledby="cv-languages-heading">
          <h2 id="cv-languages-heading" className="cv-block-heading">
            {c.languages.heading}
          </h2>
          <ul className="cv-languages">
            {c.languages.items.map((item) => (
              <li key={item.language}>
                <span className="cv-language-name">{item.language}</span>
                <span className="cv-language-sep"> — </span>
                <span className="cv-language-level">{item.level}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 10 — Looking for */}
        <section className="cv-block" aria-labelledby="cv-looking-heading">
          <h2 id="cv-looking-heading" className="cv-block-heading">
            {c.lookingFor.heading}
          </h2>
          <div className="cv-prose">
            {c.lookingFor.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        {/* 11 — Final CTA */}
        <section className="cv-block cv-final-cta" aria-labelledby="cv-final-heading">
          <h2 id="cv-final-heading" className="cv-final-heading">
            {c.finalCta.heading}
          </h2>
          <p className="cv-final-supporting">{c.finalCta.supporting}</p>
          <div className="cv-final-actions">
              <TrackLink href="/#selected-work-heading" event="view_projects" className="cv-final-link cv-final-link-primary">
                {c.finalCta.ctaWork}
              </TrackLink>
              <TrackLink
                href={CV_PDF_HREF}
                event="download_cv"
                className="cv-final-link"
                target="_blank"
                rel="noopener noreferrer"
                download="Israel-Santos-CV.pdf"
              >
                {c.finalCta.ctaCv}
              </TrackLink>
              <TrackLink href="/contact" event="contact_click" className="cv-final-link">
                {c.finalCta.ctaContact}
              </TrackLink>
          </div>
        </section>
      </article>
    </>
  );
}
