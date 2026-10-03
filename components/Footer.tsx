"use client";

import Link from "next/link";
import { useDictionary } from "@/components/DictionaryProvider";

export default function Footer() {
  const { dict } = useDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{dict.profile.name}</p>
          <p className="mt-1 text-sm text-muted">{dict.profile.brand}</p>
          <p className="mt-3 text-sm text-muted">{dict.profile.footerLine}</p>
          <Link
            href="/experiments"
            className="mt-4 inline-block text-xs tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            {dict.footer.experimentsLink}
          </Link>
          <Link
            href="/privacy"
            className="mt-2 inline-block text-xs tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            {dict.footer.privacyLink}
          </Link>
        </div>
        <p className="text-sm text-muted">
          © {year} {dict.profile.name}
        </p>
      </div>
    </footer>
  );
}
