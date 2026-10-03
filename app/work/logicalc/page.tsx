import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { getCaseStudy } from "@/i18n/caseStudies";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

const SLUG = "logicalc" as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const cs = getCaseStudy(SLUG, locale);
  return createPageMetadata({
    title: `${cs.title} — ${dict.metadata.caseStudySuffix}`,
    description: cs.intro,
    path: `/work/${SLUG}`,
    locale,
    name: dict.profile.name,
  });
}

export default async function LogicalcPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const cs = getCaseStudy(SLUG, locale);
  return <CaseStudyPage cs={cs} ui={dict.caseStudyUi} />;
}
