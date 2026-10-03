import type { Metadata } from "next";
import Link from "next/link";
import CvPageContent from "@/components/cv/CvPageContent";
import PrintCvButton from "@/components/PrintCvButton";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.cv.pageTitle,
    description: dict.cv.metaDescription,
    path: "/cv",
    locale,
    name: dict.profile.name,
  });
}

export default async function CvPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="cv-page">
      <div className="cv-toolbar mx-auto w-full max-w-4xl px-6 pt-8">
        <Link
          href="/"
          className="text-sm tracking-[0.12em] text-muted transition-colors hover:text-ink"
        >
          {dict.cv.backHome}
        </Link>
        <div className="mt-6">
          <PrintCvButton />
        </div>
      </div>

      <CvPageContent />
    </section>
  );
}
