"use client";

import Link from "next/link";
import { useDictionary } from "@/components/DictionaryProvider";

export default function ExperimentsPageContent() {
  const { dict } = useDictionary();
  const t = dict.experiments;

  return (
    <section className="experiments-page border-t border-line">
      <div className="mx-auto w-full max-w-4xl px-6 py-24 lg:py-32">
        <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {t.label}
        </p>
        <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{t.intro}</p>

        <ul className="experiments-list mt-14">
          {t.items.map((item) => (
            <li key={item.name} className="experiments-item">
              <div className="experiments-item-head">
                <h2 className="experiments-item-name">{item.name}</h2>
                <span className="experiments-item-status">{item.status}</span>
              </div>
              <p className="experiments-item-blurb">{item.blurb}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 border-t border-line pt-8 text-sm text-muted">{t.note}</p>
        <Link
          href="/work"
          className="mt-6 inline-block text-sm font-medium tracking-[0.16em] text-accent"
        >
          ← {dict.work.label}
        </Link>
      </div>
    </section>
  );
}
