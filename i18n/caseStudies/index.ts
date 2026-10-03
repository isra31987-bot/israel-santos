import type { CaseStudyData } from "@/data/caseStudies/types";
import type { Locale } from "@/i18n/config";
import { documentIntelligenceCase as docEn } from "@/data/caseStudies/document-intelligence";
import { realEstateAutomationCase as reEn } from "@/data/caseStudies/real-estate-automation";
import { logicalcCase as logEn } from "@/data/caseStudies/logicalc";
import { leadIntelligenceCase as leadEn } from "@/data/caseStudies/lead-intelligence";
import { documentIntelligenceCase as docEs } from "@/i18n/caseStudies/es/document-intelligence";
import { realEstateAutomationCase as reEs } from "@/i18n/caseStudies/es/real-estate-automation";
import { logicalcCase as logEs } from "@/i18n/caseStudies/es/logicalc";
import { leadIntelligenceCase as leadEs } from "@/i18n/caseStudies/es/lead-intelligence";

const caseStudiesByLocale = {
  es: {
    "document-intelligence": docEs,
    "real-estate-automation": reEs,
    logicalc: logEs,
    "lead-intelligence": leadEs,
  },
  en: {
    "document-intelligence": docEn,
    "real-estate-automation": reEn,
    logicalc: logEn,
    "lead-intelligence": leadEn,
  },
} as const;

export type CaseStudySlug = keyof typeof caseStudiesByLocale.es;

export function getCaseStudy(slug: CaseStudySlug, locale: Locale): CaseStudyData {
  return caseStudiesByLocale[locale][slug];
}

export function getAllCaseStudySlugs(): CaseStudySlug[] {
  return Object.keys(caseStudiesByLocale.es) as CaseStudySlug[];
}
