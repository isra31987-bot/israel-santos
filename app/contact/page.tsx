import type { Metadata } from "next";
import Link from "next/link";
import ContactEmailLink from "@/components/ContactEmailLink";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.contact.label,
    description: dict.contact.metaDescription,
    path: "/contact",
    locale,
    name: dict.profile.name,
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { contact: t, profile } = dict;
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const phoneHref = `+34${phoneDigits}`;
  const whatsappNumber = `34${phoneDigits}`;

  return (
    <section className="contact-page border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              {t.label}
            </p>
            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.heading}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {t.intro}
            </p>

            <div className="contact-details mt-12">
              <div className="contact-block">
                <p className="contact-label">{t.email}</p>
                <ContactEmailLink
                  href={`mailto:${profile.email}`}
                  className="contact-value text-accent"
                >
                  {profile.email}
                </ContactEmailLink>
              </div>

              <div className="contact-block">
                <p className="contact-label">{t.phone}</p>
                <a href={`tel:${phoneHref}`} className="contact-value">
                  {profile.phone}
                </a>
              </div>

              <div className="contact-block">
                <p className="contact-label">{t.location}</p>
                <p className="contact-value">{profile.city}</p>
              </div>
            </div>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
              {t.footerNote}
            </p>

            <div className="mt-8">
              <Link
                href="/work"
                className="border-b border-ink pb-0.5 text-sm tracking-[0.16em] text-ink"
              >
                {t.ctaWork}
              </Link>
            </div>
          </div>

          <div className="contact-form-panel">
            <ContactForm
              whatsappNumber={whatsappNumber}
              emailSubject={t.emailSubject}
              labels={t.form}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
