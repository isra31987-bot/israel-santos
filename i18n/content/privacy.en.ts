import type { PrivacyContent } from "@/i18n/types/privacy";

export const privacyEn: PrivacyContent = {
  metaDescription:
    "Legal notice, privacy and cookies for Israel Santos López portfolio.",
  title: "Legal notice & privacy",
  updated: "Last updated: October 2026",
  sections: [
    {
      heading: "Legal notice",
      paragraphs: [
        "Site owner: Israel Santos López.",
        "Contact email: isra31987@gmail.com · Phone: +34 677 230 612 · Location: Gandía (Valencia), Spain.",
        "Website: https://israel-santos.vercel.app — a personal portfolio for informational and professional purposes (not a shop or paid service).",
        "Site content (texts, design and original materials) belongs to the owner unless otherwise stated. Unauthorised commercial reproduction is not allowed.",
      ],
    },
    {
      heading: "Data controller",
      paragraphs: [
        "Israel Santos López — isra31987@gmail.com.",
        "I process data in a limited way, only to handle professional contact, appointments and site operation.",
      ],
    },
    {
      heading: "What data is collected and why",
      paragraphs: [
        "Contact form: name, email and message, used to reply. I do not store them in my own database: they are emailed via Web3Forms (and Resend if configured).",
        "WhatsApp: if you choose that channel, WhatsApp opens with your message ready; you confirm sending there. Meta/WhatsApp policies apply.",
        "Recruitment chatbot: if you use the chat, your message is sent to Google Gemini’s API to generate a reply about my professional profile. Do not send sensitive data in the chat. Chat history is not stored in a database of mine.",
        "Scheduling (Cal.com): if you book an interview or meeting, Cal.com processes the data needed for the appointment (name, email, time slot, etc.) under its own privacy policy.",
        "Analytics: Vercel Web Analytics collects privacy-friendly aggregated usage metrics (visits, pages) on the site host. It does not require a third-party cookie banner.",
        "Application links: if you open a URL with a tracking code (?ref=…), I may receive an email notice that the page was visited. It does not identify you personally; it only records the code, the date and basic browser technical data. The notice is not repeated in the same browser tab.",
        "If Google Analytics 4 or Microsoft Clarity are enabled later (env vars), they load only after you accept the optional analytics cookie banner.",
      ],
    },
    {
      heading: "Legal basis and retention",
      paragraphs: [
        "Legitimate interest / pre-contractual steps when answering professional enquiries, and consent when you use the chat, book on Cal.com or accept optional analytics cookies.",
        "Form messages and ?ref= visit notices arrive in my email and are kept as long as needed to handle the conversation or application. Appointment data is managed by Cal.com. Vercel metrics follow their platform practices.",
      ],
    },
    {
      heading: "Recipients / providers",
      paragraphs: [
        "Hosting and analytics: Vercel.",
        "Contact form and visit notices (?ref=): Web3Forms (and optionally Resend).",
        "Chat: Google (Gemini API).",
        "Bookings: Cal.com (https://cal.com).",
        "WhatsApp: Meta Platforms, if you choose that channel.",
        "These providers may process data outside Spain/EU under their terms; they are used only for the purposes described.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "A technical language cookie stores your ES/EN preference.",
        "Browser sessionStorage may temporarily store that a ?ref= visit notice was already sent in that tab, so it is not repeated.",
        "Vercel Web Analytics does not rely on third-party advertising cookies.",
        "If GA4 or Clarity are enabled, their analytics cookies/scripts load only if you accept the banner. You can reject them and keep browsing.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You may request access, rectification, erasure, restriction or objection by emailing isra31987@gmail.com.",
        "You may also lodge a complaint with the Spanish Data Protection Agency (AEPD) if you consider it necessary.",
        "To withdraw optional analytics cookie consent, clear browser cookies or reject them again if the banner appears.",
      ],
    },
  ],
};
