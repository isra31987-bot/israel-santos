import type { Metadata } from "next";
import AboutWhyMe from "@/components/about/AboutWhyMe";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.aboutWhyMe.intro.label,
    description: dict.aboutWhyMe.metaDescription,
    path: "/about",
    locale,
    name: dict.profile.name,
  });
}

export default function AboutPage() {
  return <AboutWhyMe />;
}
