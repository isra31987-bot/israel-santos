import type { CaseStudyData } from "./types";

// InmoFlow — case study Real Estate Automation. Sin cifras ni uso comercial activo inventados.

export const realEstateAutomationCase: CaseStudyData = {
  slug: "real-estate-automation",
  number: "02",
  category: "PROPTECH × AUTOMATION",
  title: "Real Estate Automation",
  subtitle: "From fragmented workflows → connected system",
  intro:
    "Connecting leads, email, market monitoring, stock and document generation into a single workflow for a real estate professional.",
  technologies: ["Supabase", "SQL", "n8n", "Gemini", "Meta", "APIs"],
  status: "FUNCTIONAL SOLUTION",

  screenshots: [
    {
      src: "/work/real-estate-automation/01-inbox.jpg",
      alt: "InmoFlow AI Inbox with portal and client messages",
      caption:
        "Centralizes incoming queries and interactions from different channels",
    },
    {
      src: "/work/real-estate-automation/02-inventario.jpg",
      alt: "InmoFlow inventory with property cards and pending alerts",
      caption: "Inventory management and alert control",
    },
    {
      src: "/work/real-estate-automation/03-embudo.jpg",
      alt: "InmoFlow capture funnel Kanban board",
      caption: "Capture funnel: organizes the conversion flow",
    },
    {
      src: "/work/real-estate-automation/04-documentos.jpg",
      alt: "InmoFlow document templates editor",
      caption:
        "Document generator: automates drafts and legal documents",
    },
  ],

  problem: {
    label: "THE PROBLEM",
    heading: "Too many channels. No single system.",
    paragraphs: [
      "A real estate professional managed email, Meta leads, property portals, stock and contracts across separate tools and notes.",
      "Information was copied manually between channels. There was no shared view of leads, inventory or documents.",
      "Responding to enquiries, tracking opportunities and preparing contracts required switching context constantly.",
      "The workflow worked — but only through extra effort and repetition.",
    ],
  },

  beforeFlow: [
    "META LEADS",
    "EMAIL INBOX",
    "PORTAL CHECKS",
    "STOCK / NOTES",
    "MANUAL DOCUMENTS",
  ],

  opportunity: {
    heading: 'The opportunity was not "another CRM".',
    quote:
      "The opportunity was to connect existing channels into one operational system.",
    existingItems: [
      "document templates from the client",
      "leads from Meta and email",
      "an established way of managing stock",
    ],
    paragraphs: [
      "The goal was not to replace how the business worked. It was to centralise information and automate the repetitive parts: classification, routing, alerts and document preparation.",
    ],
  },

  solution: {
    heading: "One connected system: InmoFlow.",
    paragraphs: [
      "InmoFlow unifies five modules on a Supabase database: AI Inbox, Inventory, Tracker (portal scraping), Capture Funnel and Documents.",
      "Gemini classifies email and drafts responses. Meta leads arrive via webhook (n8n). A Python scraper feeds private listings from Milanuncios into the tracker.",
      "Documents are generated from the client's own templates — known fields pre-filled from the system; variable fields collected through forms.",
    ],
    fields: ["INBOX", "INVENTARIO", "RASTREADOR", "EMBUDO", "DOCUMENTOS"],
  },

  howItWorks: [
    { label: "LEADS + EMAIL + MARKET + STOCK", description: "Information enters from Meta, email, portals and inventory." },
    { label: "CENTRAL DATABASE", description: "Supabase stores clients, properties, leads and documents in one place." },
    { label: "AUTOMATION", description: "AI classification, webhooks, scraping and alerts reduce manual routing." },
    { label: "ACTIONS / DOCUMENTS / ALERTS", description: "The agent responds, advances leads, monitors stock and generates contracts." },
  ],

  userFlowHeading: "From lead to document.",
  userFlowNote: "The agent remains in control — automation assists, it does not replace decisions.",
  userFlow: [
    { step: "1", title: "CAPTURE", description: "A lead arrives via Meta, email or the portal tracker." },
    { step: "2", title: "CLASSIFY", description: "Inbox AI sorts the message and drafts a response." },
    { step: "3", title: "TRACK", description: "The funnel Kanban advances the lead through stages." },
    { step: "4", title: "MONITOR", description: "The tracker surfaces private listings and opportunities." },
    { step: "5", title: "GENERATE", description: "A document is created from templates with pre-filled data." },
  ],

  evidencePlaceholders: [
    "Screenshot — AI inbox",
    "Screenshot — capture funnel",
    "Screenshot — inventory",
    "Screenshot — document generation",
  ],

  builtWith: [
    "Supabase",
    "SQL",
    "n8n",
    "Gemini",
    "Meta",
    "APIs",
    "Web Scraping",
  ],

  role: [
    "Business Problem Analysis",
    "Process Mapping",
    "Solution Architecture",
    "Next.js / Supabase Development",
    "AI Integration (Gemini)",
    "Automation Design (n8n, webhooks)",
    "Workflow & UX Design",
    "Testing & Iteration",
  ],

  demonstrates: [
    { title: "CONNECT FRAGMENTED WORKFLOWS", description: "Unifying channels that previously operated in isolation." },
    { title: "CENTRALISE DATA", description: "One database instead of scattered spreadsheets and notes." },
    { title: "APPLY AI SELECTIVELY", description: "Using Gemini where classification and drafting save time." },
    { title: "AUTOMATE REPETITIVE TASKS", description: "Webhooks, scraping and alerts handle routine routing." },
    { title: "BUILD A FUNCTIONAL MVP", description: "A working product, not a slide deck or prototype." },
    { title: "DESIGN FOR REAL OPERATIONS", description: "Built around how an agent actually works day to day." },
  ],

  statusNote:
    "Built as a functional MVP for a real estate workflow. Not currently in active commercial use.",

  cta: {
    heading: "Have fragmented tools?",
    quoteLines: [
      "Maybe you don't need more apps.",
      "Maybe you need one connected system.",
    ],
  },

  navigation: {
    previous: { href: "/work/document-intelligence", label: "Document Intelligence" },
    next: { href: "/work/logicalc", label: "Logicalc" },
  },
};
