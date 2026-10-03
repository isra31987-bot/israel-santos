"use client";

import Link from "next/link";
import TrackLink from "@/components/TrackLink";
import { useDictionary } from "@/components/DictionaryProvider";
import { CV_PDF_HREF } from "@/data/site";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Reveal from "@/components/case-studies/Reveal";

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="why-tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function BridgeVisual({
  businessTitle,
  businessItems,
  techTitle,
  techItems,
  center,
}: {
  businessTitle: string;
  businessItems: string[];
  techTitle: string;
  techItems: string[];
  center: string;
}) {
  return (
    <div className="why-bridge-visual">
      <div className="why-bridge-col">
        <p className="why-bridge-col-title">{businessTitle}</p>
        <TagList items={businessItems} />
      </div>
      <div className="why-bridge-center" aria-hidden="true">
        <span className="why-bridge-x">×</span>
        <span className="why-bridge-solutions">{center}</span>
      </div>
      <div className="why-bridge-col">
        <p className="why-bridge-col-title">{techTitle}</p>
        <TagList items={techItems} />
      </div>
    </div>
  );
}

// Timeline con línea conectora y scroll reveal (como Approach / ProcessFlow).
function PathTimeline({
  evolution,
  timeline,
}: {
  evolution: string[];
  timeline: {
    period: string;
    title: string;
    items: string[];
  }[];
}) {
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleStages, setVisibleStages] = useState<Set<number>>(() => new Set());
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const reduced = mq.matches;
      setReducedMotion(reduced);
      if (reduced) setVisibleStages(new Set(timeline.map((_, i) => i)));
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [timeline]);

  useEffect(() => {
    if (reducedMotion) return;
    const observers: IntersectionObserver[] = [];
    stageRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStages((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.3, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [reducedMotion, timeline]);

  const progress =
    visibleStages.size === 0
      ? 0
      : ((Math.max(...visibleStages) + 1) / timeline.length) * 100;

  return (
    <div className="why-timeline-wrap">
      <div
        className="why-evolution-rail"
        aria-hidden="true"
        style={{ "--why-progress": `${progress}%` } as CSSProperties}
      >
        <div className="why-evolution-rail-bg" />
        <div className="why-evolution-rail-fill" />
      </div>

      <ol className="why-timeline">
        {timeline.map((stage, index) => {
          const visible = reducedMotion || visibleStages.has(index);
          return (
            <li
              key={stage.title}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              className={`why-timeline-stage${visible ? " why-timeline-stage-visible" : ""}`}
            >
              <div className="why-timeline-marker">
                {stage.period && (
                  <span className="why-timeline-period">{stage.period}</span>
                )}
              </div>
              <div className="why-timeline-body">
                <p className="why-timeline-title">{stage.title}</p>
                <ul className="why-timeline-items">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="why-evolution-flow" aria-hidden="true">
        {evolution.map((step, index) => (
          <span key={step} className="why-evolution-step">
            {index > 0 && <span className="why-evolution-arrow">→</span>}
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutWhyMe() {
  const { dict } = useDictionary();
  const c = dict.aboutWhyMe;

  return (
    <article className="why-me">
      {/* Intro */}
      <section className="why-section why-intro border-t border-line">
        <div className="why-inner">
          <Reveal>
            <p className="why-label">{c.intro.label}</p>
            <h1 className="why-heading-lg">
              {c.intro.heading[0]}
              <br />
              {c.intro.heading[1]}
            </h1>
            <p className="why-lead">{c.intro.supporting}</p>
            <div className="why-prose mt-8">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-14">
            <BridgeVisual
              businessTitle={c.intro.businessTitle}
              businessItems={c.intro.businessItems}
              techTitle={c.intro.techTitle}
              techItems={c.intro.techItems}
              center={c.intro.center}
            />
          </Reveal>
        </div>
      </section>

      {/* 01 — The unusual path */}
      <section className="why-section border-t border-line">
        <div className="why-inner">
          <Reveal>
            <h2 className="why-heading-md">{c.path.heading}</h2>
          </Reveal>
          <Reveal className="mt-12">
            <PathTimeline evolution={c.path.evolution} timeline={c.path.timeline} />
          </Reveal>
        </div>
      </section>

      {/* 02 — Capabilities */}
      <section className="why-section border-t border-line">
        <div className="why-inner">
          <Reveal>
            <h2 className="why-heading-md">{c.capabilities.heading}</h2>
          </Reveal>
          <div className="why-capabilities mt-12">
            {c.capabilities.items.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="why-capability">
                  <p className="why-capability-num">{item.number}</p>
                  <h3 className="why-capability-title">{item.title}</h3>
                  <p className="why-capability-desc">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How I work */}
      <section className="why-section border-t border-line">
        <div className="why-inner">
          <Reveal>
            <h2 className="why-heading-md">{c.howIWork.heading}</h2>
          </Reveal>
          <ol className="why-steps mt-12">
            {c.howIWork.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <li className="why-step">
                  <span className="why-step-num">{step.number}</span>
                  <div>
                    <p className="why-step-title">{step.title}</p>
                    <p className="why-step-desc">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10">
            <div className="why-closing">
              {c.howIWork.closing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — Cómo construyo + Formación + Qué busco (3 columnas) */}
      <section className="why-section border-t border-line">
        <div className="why-inner">
          <Reveal>
            <div className="why-combined">
              <div className="why-combined-block">
                <p className="why-label">{c.technical.label}</p>
                <h2 className="why-heading-sm mt-4">{c.technical.heading}</h2>
                <div className="why-prose why-prose--compact mt-6">
                  {c.technical.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="why-combined-block">
                <h2 className="why-label">{c.education.heading}</h2>
                <ul className="why-education mt-6">
                  {c.education.items.map((item) => (
                    <li key={item.title} className="why-education-item">
                      <p className="why-education-title">{item.title}</p>
                      {item.subtitle && (
                        <p className="why-education-sub">{item.subtitle}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="why-combined-block">
                <p className="why-label">{c.motivation.label}</p>
                <h2 className="why-heading-sm mt-4">{c.motivation.heading}</h2>
                <div className="why-prose why-prose--compact mt-6">
                  {c.motivation.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final */}
      <section className="why-section why-final border-t border-line">
        <div className="why-inner">
          <Reveal>
            <h2 className="why-heading-lg">
              {c.final.heading[0]}
              <br />
              {c.final.heading[1]}
            </h2>
            <p className="why-final-supporting mt-8">{c.final.supporting}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <TrackLink
                href="/#selected-work-heading"
                event="view_projects"
                className="text-sm font-medium tracking-[0.16em] text-accent"
              >
                {c.final.ctaWork}
              </TrackLink>
              <TrackLink
                href={CV_PDF_HREF}
                event="download_cv"
                className="border-b border-ink pb-0.5 text-sm tracking-[0.16em] text-ink"
                target="_blank"
                rel="noopener noreferrer"
                download="Israel-Santos-CV.pdf"
              >
                {c.final.ctaCv}
              </TrackLink>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
