"use client";

import { useEffect, useRef, useState } from "react";
import { useDictionary } from "@/components/DictionaryProvider";

export default function ApproachSection() {
  const { dict } = useDictionary();
  const approachSteps = dict.approach.steps;
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleStages, setVisibleStages] = useState<Set<number>>(() => new Set());
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyReduced = () => {
      const reduced = mq.matches;
      setReducedMotion(reduced);
      if (reduced) {
        setVisibleStages(new Set(approachSteps.map((_, i) => i)));
      }
    };
    applyReduced();
    mq.addEventListener("change", applyReduced);
    return () => mq.removeEventListener("change", applyReduced);
  }, [approachSteps]);

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
        { threshold: 0.3, rootMargin: "0px 0px -6% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [reducedMotion]);

  return (
    <section
      className="approach-section border-t border-line"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        {/* Intro a ancho completo — más claro que el split anterior */}
        <header className="approach-header">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {dict.approach.label}
          </p>
          <h2
            id="approach-heading"
            className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            {dict.approach.heading}
          </h2>
          <p className="approach-tagline mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
            {dict.approach.tagline[0]}
            <br />
            {dict.approach.tagline[1]}
          </p>
        </header>

        {/* Grid de pasos: 1 → 2 → 3 columnas según viewport */}
        <ol className="approach-grid">
          {approachSteps.map((step, index) => {
            const visible = reducedMotion || visibleStages.has(index);
            return (
              <li
                key={step.number}
                ref={(el) => {
                  stageRefs.current[index] = el;
                }}
                className={`approach-step${visible ? " approach-step-visible" : ""}`}
              >
                <span className="approach-step-number" aria-hidden="true">
                  {step.number}
                </span>
                <div className="approach-step-body">
                  <p className="approach-step-label">{step.label}</p>
                  <p className="approach-step-question">{step.question}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="approach-closing">
          {dict.approach.closing[0]}
          <br />
          {dict.approach.closing[1]}
        </p>
      </div>
    </section>
  );
}
