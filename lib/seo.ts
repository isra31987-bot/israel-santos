import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getSiteUrl } from "@/data/site";

// Metadata reutilizable: título, descripción, Open Graph y Twitter.
export function createPageMetadata({
  title,
  description,
  path = "",
  locale = "es",
  name = "Israel Santos",
}: {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
  name?: string;
}): Metadata {
  const url = `${getSiteUrl()}${path}`;
  const fullTitle = path ? `${title} — ${name}` : `${name} — ${title}`;
  const ogImage = `${getSiteUrl()}/opengraph-image`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: name,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
