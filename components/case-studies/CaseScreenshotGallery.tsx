"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { CaseStudyScreenshot } from "@/data/caseStudies/types";

type Props = {
  shots: CaseStudyScreenshot[];
  /** Variante hero (grande) o evidence (grid del body) */
  variant?: "hero" | "evidence";
  closeLabel?: string;
};

export default function CaseScreenshotGallery({
  shots,
  variant = "hero",
  closeLabel = "Cerrar",
}: Props) {
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();

  // Cerrar con Escape y bloquear scroll del body
  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setActive((i) => (i === null ? 0 : (i + 1) % shots.length));
      }
      if (e.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? 0 : (i - 1 + shots.length) % shots.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, shots.length]);

  if (shots.length === 0) return null;

  const current = active !== null ? shots[active] : null;

  return (
    <>
      <ul className={`case-shot-grid case-shot-grid--${variant}`}>
        {shots.map((shot, index) => (
          <li key={shot.src}>
            <button
              type="button"
              className="case-shot"
              onClick={() => setActive(index)}
              aria-label={`${shot.caption} — ver detalle`}
            >
              <span className="case-shot-frame">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="case-shot-img"
                  sizes={
                    variant === "hero"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
              </span>
              <span className="case-shot-caption">
                <span className="case-shot-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {shot.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && active !== null && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="case-lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="case-lightbox-toolbar">
              <p id={titleId} className="case-lightbox-caption">
                <span className="case-shot-index" aria-hidden="true">
                  {String(active + 1).padStart(2, "0")}
                </span>
                {current.caption}
              </p>
              <button
                type="button"
                className="case-lightbox-close"
                onClick={() => setActive(null)}
              >
                {closeLabel}
              </button>
            </div>
            <div className="case-lightbox-frame">
              <Image
                src={current.src}
                alt={current.alt}
                width={1400}
                height={900}
                className="case-lightbox-img"
                sizes="100vw"
                priority
              />
            </div>
            {shots.length > 1 && (
              <div className="case-lightbox-nav">
                <button
                  type="button"
                  className="case-lightbox-nav-btn"
                  onClick={() =>
                    setActive((i) =>
                      i === null ? 0 : (i - 1 + shots.length) % shots.length,
                    )
                  }
                >
                  ←
                </button>
                <button
                  type="button"
                  className="case-lightbox-nav-btn"
                  onClick={() =>
                    setActive((i) => (i === null ? 0 : (i + 1) % shots.length))
                  }
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
