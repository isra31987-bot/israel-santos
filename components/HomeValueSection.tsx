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
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {t.label}
        </p>
        <h2
          id="home-value-heading"
          className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          {t.heading[0]}
          <br />
          {t.heading[1]}
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{t.supporting}</p>
        <ul className="home-value-list mt-10">
          {t.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
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
