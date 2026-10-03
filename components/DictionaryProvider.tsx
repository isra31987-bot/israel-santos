"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type DictionaryContextValue = {
  locale: Locale;
  dict: Dictionary;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export default function DictionaryProvider({
  locale,
  dict,
  children,
}: DictionaryContextValue & { children: ReactNode }) {
  return (
    <DictionaryContext.Provider value={{ locale, dict }}>
      {children}
    </DictionaryContext.Provider>
  );
}

// Hook para componentes cliente que necesitan textos traducidos.
export function useDictionary() {
  const value = useContext(DictionaryContext);
  if (!value) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return value;
}
