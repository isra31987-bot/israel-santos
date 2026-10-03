"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions/locale";
import type { Locale } from "@/i18n/config";
import { useDictionary } from "@/components/DictionaryProvider";

// Selector ES / EN: guarda cookie y recarga la página con el nuevo idioma.
export default function LocaleSwitcher() {
  const { locale } = useDictionary();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  }

  return (
    <div
      className="flex items-center gap-1 text-sm"
      role="group"
      aria-label={locale === "es" ? "Idioma" : "Language"}
    >
      <button
        type="button"
        onClick={() => switchTo("es")}
        className={
          locale === "es"
            ? "text-ink"
            : "text-muted transition-colors hover:text-ink"
        }
        aria-pressed={locale === "es"}
        disabled={pending}
      >
        ES
      </button>
      <span className="text-muted" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={
          locale === "en"
            ? "text-ink"
            : "text-muted transition-colors hover:text-ink"
        }
        aria-pressed={locale === "en"}
        disabled={pending}
      >
        EN
      </button>
    </div>
  );
}
