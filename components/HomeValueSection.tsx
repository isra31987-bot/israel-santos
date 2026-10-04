"use client";

import Link from "next/link";
import TrackLink from "@/components/TrackLink";
import { useDictionary } from "@/components/DictionaryProvider";

export default function HomeValueSection() {
  const { dict } = useDictionary();
  const t = dict.homeClosing.value;
  const cta = dict.homeClosing.contact;

  return (
    <section
      className="home-value-section border-t border-line"
      aria-labelledby="home-value-heading"
    >
      <div className="home-value-inner mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <p className="home-value-label text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {t.label}
        </p>

        <h2 id="home-value-heading" className="home-value-heading">
          {t.heading.map((line) => (
            <span key={line} className="home-value-heading-line">
              {line}
            </span>
          ))}
        </h2>

        <p className="home-value-supporting">{t.supporting}</p>

        <ul className="home-value-list">
          {t.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="home-value-ctas">
          <TrackLink
            href="/contact"
            event="contact_click"
            className="cta-contact-primary"
          >
            {cta.ctaContact}
          </TrackLink>
          <Link
            href="/about"
            className="border-b border-ink pb-0.5 text-sm tracking-[0.16em] text-ink"
          >
            {cta.ctaAbout}
          </Link>
        </div>
      </div>
    </section>
  );
}
