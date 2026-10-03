export type AnalyticsEvent = "download_cv" | "contact_click" | "view_projects";

const CONSENT_KEY = "analytics-consent";

export function hasAnalyticsConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_CLARITY_ID
  );
}

export function getAnalyticsConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function setAnalyticsConsent(granted: boolean) {
  localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
}

// Envía evento a GA4 si hay consentimiento y gtag disponible.
export function trackEvent(name: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (getAnalyticsConsent() !== "granted") return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  gtag("event", name, params);
}
