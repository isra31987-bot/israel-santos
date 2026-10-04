import Link from "next/link";
import Reveal from "@/components/case-studies/Reveal";
import CaseScreenshotGallery from "@/components/case-studies/CaseScreenshotGallery";
import type { CaseStudyData } from "@/data/caseStudies/types";
import type { Dictionary } from "@/i18n/types";

function VisualPlaceholder({
  label,
  kicker,
  note,
  large = false,
}: {
  label: string;
  kicker: string;
  note: string;
  large?: boolean;
}) {
  return (
    <div
      className={`case-visual${large ? " case-visual--large" : ""}`}
      aria-hidden="true"
    >
      <p className="case-visual-kicker">{kicker}</p>
      <p className="case-visual-label">{label}</p>
      <p className="case-visual-note">{note}</p>
    </div>
  );
}

function VerticalFlow({
  steps,
  ariaLabel,
}: {
  steps: string[];
  ariaLabel: string;
}) {
  return (
    <div className="case-flow case-flow--vertical" aria-label={ariaLabel}>
      {steps.map((step, index) => (
        <div key={step} className="case-flow-step">
          {index > 0 && (
            <span className="case-flow-arrow" aria-hidden="true">
              ↓
            </span>
          )}
          <span className="case-flow-label">{step}</span>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyPage({
  cs,
  ui,
}: {
  cs: CaseStudyData;
  ui: Dictionary["caseStudyUi"];
}) {
  const hasShots = Boolean(cs.screenshots?.length);

  return (
    <article className="case-study">
      <header className="case-hero mx-auto w-full max-w-6xl px-6 pb-16 pt-24 lg:pb-24 lg:pt-28">
        <Link
          href="/work"
          className="text-sm tracking-[0.12em] text-muted transition-colors hover:text-ink"
        >
          {ui.backToWork}
        </Link>

        <Reveal className="mt-12">
          <div className="case-hero-meta">
            <p className="text-xs tracking-[0.2em] text-muted">
              {cs.number} / {ui.selectedWork}
            </p>
            <p className="text-[10px] font-medium tracking-[0.18em] text-accent">
              {cs.category}
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-sm text-muted sm:text-base">{cs.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {cs.intro}
          </p>

          <ul className="case-tags mt-8">
            {cs.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="mt-6 text-[10px] font-medium tracking-[0.18em] text-accent">
            {cs.status}
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          {hasShots && cs.screenshots ? (
            <>
              <CaseScreenshotGallery
                shots={cs.screenshots}
                variant="hero"
                closeLabel={ui.closeLightbox}
              />
              {cs.screenshotsNote && (
                <p className="case-shots-note">{cs.screenshotsNote}</p>
              )}
            </>
          ) : (
            <VisualPlaceholder
              label={ui.projectScreenshot}
              kicker={ui.projectVisual}
              note={ui.screenshotComing}
              large
            />
          )}
        </Reveal>
      </header>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <p className="case-label">{cs.problem.label}</p>
            <h2 className="case-heading">{cs.problem.heading}</h2>
            <div className="case-prose">
              {cs.problem.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading">{ui.before}</h2>
            <VerticalFlow steps={cs.beforeFlow} ariaLabel={ui.beforeAria} />
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading">{cs.opportunity.heading}</h2>
            <p className="case-quote">{cs.opportunity.quote}</p>
            <div className="case-prose">
              {cs.opportunity.existingItems && (
                <>
                  <p>{ui.businessAlreadyHad}</p>
                  <ul className="case-list">
                    {cs.opportunity.existingItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {cs.opportunity.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading">{cs.solution.heading}</h2>
            <div className="case-prose">
              {cs.solution.paragraphs.slice(0, 1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {cs.solution.fields && (
              <ul className="case-fields">
                {cs.solution.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            )}
            <div className="case-prose">
              {cs.solution.paragraphs.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading case-heading--sm">{ui.howItWorks}</h2>
            <div className="case-flow-detailed">
              {cs.howItWorks.map((step, index) => (
                <div key={step.label} className="case-flow-detailed-step">
                  {index > 0 && (
                    <span className="case-flow-arrow" aria-hidden="true">
                      ↓
                    </span>
                  )}
                  <p className="case-flow-detailed-label">{step.label}</p>
                  <p className="case-flow-detailed-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading">{cs.userFlowHeading}</h2>
            {cs.userFlowNote && (
              <p className="case-prose-note">{cs.userFlowNote}</p>
            )}
            <div className="case-user-flow">
              {cs.userFlow.map((step, index) => (
                <div key={step.step}>
                  {index > 0 && (
                    <span
                      className="case-flow-arrow case-user-arrow"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  )}
                  <div className="case-user-step">
                    <span className="case-user-number">{step.step}</span>
                    <div>
                      <p className="case-user-title">{step.title}</p>
                      <p className="case-user-desc">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading case-heading--sm">{ui.builtWith}</h2>
            <ul className="case-tags case-tags--lg">
              {cs.builtWith.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <p className="case-tech-note">{ui.techNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading case-heading--sm">{ui.myRole}</h2>
            <ul className="case-role-list">
              {cs.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner">
          <Reveal>
            <h2 className="case-heading">{ui.demonstrates}</h2>
            <div className="case-capabilities">
              {cs.demonstrates.map((item) => (
                <div key={item.title} className="case-capability">
                  <p className="case-capability-title">{item.title}</p>
                  <p className="case-capability-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-section border-t border-line">
        <div className="case-section-inner case-cta">
          <Reveal>
            <h2 className="case-heading">{cs.cta.heading}</h2>
            <p className="case-quote">
              {cs.cta.quoteLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="case-cta-links">
              <Link
                href="/work"
                className="text-sm font-medium tracking-[0.14em] text-accent"
              >
                {ui.exploreMore}
              </Link>
              <Link
                href="/contact"
                className="border-b border-ink pb-0.5 text-sm tracking-[0.14em] text-ink"
              >
                {ui.getInTouch}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <nav className="case-nav border-t border-line" aria-label="Case study navigation">
        <div className="case-nav-inner">
          {cs.navigation.previous ? (
            <Link href={cs.navigation.previous.href} className="case-nav-prev">
              {ui.previous}
              <span className="case-nav-prev-label">{cs.navigation.previous.label}</span>
            </Link>
          ) : (
            <span className="case-nav-prev text-muted">{ui.previous}</span>
          )}
          <Link href="/work" className="case-nav-center">
            {ui.selectedWorkNav}
          </Link>
          {cs.navigation.next ? (
            <Link href={cs.navigation.next.href} className="case-nav-next">
              {ui.next}
              <span className="case-nav-next-label">{cs.navigation.next.label}</span>
            </Link>
          ) : (
            <span className="case-nav-next text-muted">{ui.next}</span>
          )}
        </div>
      </nav>
    </article>
  );
}
