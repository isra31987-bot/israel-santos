import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsGate from "@/components/AnalyticsGate";
import RecruitmentChat from "@/components/RecruitmentChat";
import VisitNotifier from "@/components/VisitNotifier";
import DictionaryProvider from "@/components/DictionaryProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import { getSiteUrl } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return createPageMetadata({
    title: dict.profile.brand,
    description: `${dict.profile.title}. ${dict.profile.subheadline}`,
    path: "",
    locale,
    name: dict.profile.name,
  });
}

function JsonLd({ dict }: { dict: ReturnType<typeof getDictionary> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dict.profile.fullName,
    jobTitle: dict.profile.title,
    description: dict.profile.subheadline,
    email: dict.profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: dict.profile.city,
    },
    url: getSiteUrl(),
    knowsAbout: dict.profile.tags,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="site-shell flex min-h-full flex-col bg-bg font-sans text-ink">
        <JsonLd dict={dict} />
        <DictionaryProvider locale={locale} dict={dict}>
          <AnalyticsGate />
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <RecruitmentChat />
          {/* Aviso por email si la URL trae ?ref= (candidaturas) */}
          <VisitNotifier />
          {/* Vercel Web Analytics — privacy-friendly, sin cookies de terceros */}
          <Analytics />
        </DictionaryProvider>
      </body>
    </html>
  );
}
