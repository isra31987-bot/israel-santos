import type { Metadata } from "next";
import ApproachSection from "@/components/ApproachSection";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.approach.label,
    description: dict.metadata.approachDescription,
    path: "/approach",
    locale,
    name: dict.profile.name,
  });
}

export default function ApproachPage() {
  return <ApproachSection />;
}
