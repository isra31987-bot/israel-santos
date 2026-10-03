import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.privacy.title,
    description: dict.privacy.metaDescription,
    path: "/privacy",
    locale,
    name: dict.profile.name,
  });
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.privacy;

  return (
    <section className="privacy-page border-t border-line">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 lg:py-32">
        <h1 className="text-3xl font-medium tracking-tight">{t.title}</h1>
        <p className="mt-3 text-sm text-muted">{t.updated}</p>
        <div className="privacy-sections mt-12">
          {t.sections.map((section) => (
            <section key={section.heading} className="privacy-section">
              <h2 className="privacy-section-heading">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="privacy-section-text">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
