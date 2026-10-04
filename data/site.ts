// URL base del sitio. En producción, definir NEXT_PUBLIC_SITE_URL en Vercel.
// Ejemplo: https://israel-santos.vercel.app

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return url.replace(/\/$/, "");
}

/** PDF descargable (generado con: npm run cv:pdf → public/cv.pdf) */
export const CV_PDF_HREF = "/cv.pdf";

/** Página CV web (imprimir con Ctrl+P) */
export const CV_PAGE_HREF = "/cv";

/** Cal.com — agenda pública (contacto / entrevistas) */
export const CAL_COM_URL = "https://cal.com/israel-santos-lopez-mozdgo";
export const CAL_COM_EMBED_URL = `${CAL_COM_URL}?embed=true`;
