"use client";

import { useDictionary } from "@/components/DictionaryProvider";

export default function PrintCvButton() {
  const { dict } = useDictionary();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-print-btn text-sm font-medium tracking-[0.16em] text-accent"
    >
      {dict.cv.print}
    </button>
  );
}
