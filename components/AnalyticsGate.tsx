"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getAnalyticsConsent,
  hasAnalyticsConfigured,
  setAnalyticsConsent,
} from "@/lib/analytics";
import { useDictionary } from "@/components/DictionaryProvider";

function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
      {clarityId ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}

function CookieBanner({ onDecision }: { onDecision: () => void }) {
  const { dict } = useDictionary();

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner-inner">
        <p id="cookie-banner-title" className="cookie-banner-text">
          {dict.cookies.message}{" "}
          <Link href="/privacy" className="cookie-banner-link">
            {dict.cookies.privacyLink}
          </Link>
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn-decline"
            onClick={() => {
              setAnalyticsConsent(false);
              onDecision();
            }}
          >
            {dict.cookies.decline}
          </button>
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn-accept"
            onClick={() => {
              setAnalyticsConsent(true);
              onDecision();
            }}
          >
            {dict.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsGate() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [mounted, setMounted] = useState(false);
  const analyticsEnabled = hasAnalyticsConfigured();

  useEffect(() => {
    setMounted(true);
    setConsent(getAnalyticsConsent());
  }, []);

  if (!mounted) return null;

  return (
    <>
      {analyticsEnabled && consent === null ? (
        <CookieBanner onDecision={() => setConsent(getAnalyticsConsent())} />
      ) : null}
      {consent === "granted" ? <AnalyticsScripts /> : null}
    </>
  );
}
