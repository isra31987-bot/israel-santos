import type { Metadata } from "next";
import ExperimentsPageContent from "@/components/experiments/ExperimentsPageContent";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.experiments.label,
    description: dict.experiments.metaDescription,
    path: "/experiments",
    locale,
    name: dict.profile.name,
  });
}

export default function ExperimentsPage() {
  return <ExperimentsPageContent />;
}
