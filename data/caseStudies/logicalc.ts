import type { CaseStudyData } from "./types";

// LogiCalc (Logicalc) — rentabilidad logística. Sin suscriptores de pago ni métricas inventadas.

export const logicalcCase: CaseStudyData = {
  slug: "logicalc",
  number: "03",
  category: "TRANSPORT × SAAS",
  title: "Logicalc",
  subtitle: "From transport experience → SaaS product",
  intro:
    "A profitability analysis tool designed to help small transport professionals make day-to-day decisions.",
  technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
  status: "FUNCTIONAL PRODUCT / MVP",

  screenshots: [
    {
      src: "/work/logicalc/01-calculadora.jpg",
      alt: "LogiCalc profitability calculator with trip inputs and results",
      caption: "Calculate the profitability of a job instantly",
    },
    {
      src: "/work/logicalc/02-beneficios.jpg",
      alt: "LogiCalc benefits section for carriers and logistics companies",
      caption: "Designed to help you in your day-to-day work",
    },
    {
      src: "/work/logicalc/03-insights.jpg",
      alt: "LogiCalc period insights with costs breakdown and KPIs",
      caption: "Insights that help you make decisions",
    },
    {
      src: "/work/logicalc/04-informes.png",
      alt: "LogiCalc trip report export ready to share",
      caption: "Export your reports and share them easily",
    },
  ],

  problem: {
    label: "THE PROBLEM",
    heading: "A price on the table. No clear answer.",
    paragraphs: [
      "Self-employed transport professionals and small fleets regularly receive a proposed trip price and must decide quickly whether to accept it.",
      "The decision depends on fuel, insurance, maintenance, empty kilometres, amortisation and other operating costs — but those numbers rarely come together in one place.",
      "Many carriers rely on instinct or rough mental estimates. There is no simple way to see net profit and margin before saying yes or no.",
      "Over time, there is also no structured history to review which routes or periods were actually profitable.",
    ],
  },

  beforeFlow: [
    "TRIP OFFER RECEIVED",
    "MENTAL ESTIMATE",
    "ACCEPT OR REJECT",
    "NO COST BREAKDOWN",
    "NO HISTORY",
  ],

  opportunity: {
    heading: 'The opportunity was not "another transport app".',
    quote:
      "The opportunity was to turn a daily business decision into a clear, repeatable calculation.",
    existingItems: [
      "direct experience in the transport sector",
      "a known set of operating costs every carrier faces",
      "a decision that happens before every trip",
    ],
    paragraphs: [
      "The product did not need to manage routes, dispatch or fleet logistics. It needed to answer one question: is this trip worth it?",
    ],
  },

  solution: {
    heading: "Clarity before every trip.",
    paragraphs: [
      "LogiCalc (Logicalc) is a web application that calculates trip profitability in seconds using a structured cost model.",
      "Users enter trip price, distance, weight, empty kilometres and extra costs. The system returns net profit, margin and a detailed cost breakdown.",
      "Subscribers can submit a custom cost profile (approved by admin) and register trips over time to analyse accumulated profitability for a selected period.",
    ],
    fields: ["FUEL", "INSURANCE", "MAINTENANCE", "EMPTY KM", "OPERATING COSTS"],
  },

  howItWorks: [
    { label: "TRIP + COSTS", description: "Price, distance, weight, empty km and extras are entered." },
    { label: "COST MODEL", description: "A standard or personalised model applies sector-specific rates." },
    { label: "PROFITABILITY", description: "Net profit and margin are calculated with a full breakdown." },
    { label: "ACCEPT / REJECT", description: "The carrier decides with numbers, not guesswork." },
  ],

  userFlowHeading: "From offer to decision.",
  userFlowNote: "Freemium model: three free calculations before subscription. The user always makes the final call.",
  userFlow: [
    { step: "1", title: "INPUT", description: "Enter trip price, km, weight, empty km and extra costs." },
    { step: "2", title: "CALCULATE", description: "The system applies the standard or approved cost model." },
    { step: "3", title: "REVIEW", description: "See net profit, margin % and cost breakdown." },
    { step: "4", title: "DECIDE", description: "Accept or reject the trip with full visibility." },
    { step: "5", title: "RECORD", description: "Subscribers save trips and review totals over a period." },
  ],

  evidencePlaceholders: [
    "Screenshot — profitability calculator",
    "Screenshot — cost breakdown",
    "Screenshot — trip registry",
    "Screenshot — dashboard",
  ],

  builtWith: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "Resend"],

  role: [
    "Business Problem Analysis",
    "Product Design",
    "Cost Model Design",
    "Next.js Development",
    "PostgreSQL / Supabase Integration",
    "Freemium & Subscription Design",
    "UX for Mobile-First Users",
    "Testing & Iteration",
  ],

  demonstrates: [
    { title: "START FROM REAL EXPERIENCE", description: "Born from direct knowledge of how transport professionals decide." },
    { title: "QUANTIFY DECISIONS", description: "Replacing instinct with a structured profitability calculation." },
    { title: "BUILD SaaS FROM A PROBLEM", description: "A product shaped around one recurring business question." },
    { title: "DESIGN COST MODELS", description: "Standard and personalised models by weight, distance and operation type." },
    { title: "FREEMIUM TO SUBSCRIPTION", description: "Three free uses, then subscription for unlimited access and trip history." },
    { title: "SHIP A FUNCTIONAL PRODUCT", description: "Deployed online with real auth, database and email recovery." },
  ],

  statusNote:
    "Functional product deployed on Vercel. Designed as a subscription SaaS.",

  cta: {
    heading: "Accepting trips on instinct?",
    quoteLines: [
      "Maybe the decision needs numbers,",
      "not guesswork.",
    ],
  },

  navigation: {
    previous: { href: "/work/real-estate-automation", label: "Real Estate Automation" },
    next: { href: "/work/lead-intelligence", label: "Lead Intelligence" },
  },
};
