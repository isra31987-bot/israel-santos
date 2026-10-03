import type { CaseStudyData } from "./types";

export const documentIntelligenceCase: CaseStudyData = {
  slug: "document-intelligence",
  number: "01",
  category: "AI × AUTOMATION",
  title: "Document Intelligence",
  subtitle: "From paper documents → structured data",
  intro:
    "Automating the extraction and management of vehicle information from scanned tachograph tickets.",
  technologies: ["Python", "AI", "OCR", "Excel"],
  status: "REAL BUSINESS SOLUTION",

  screenshots: [
    {
      src: "/work/document-intelligence/01-entradas.png",
      alt: "Vehicle CONTROL entries screen",
      caption:
        "Register entries and exits instantly, without manual errors",
    },
    {
      src: "/work/document-intelligence/02-fotos.png",
      alt: "Selecting ticket photos for AI processing",
      caption: "Import data directly from photos",
    },
    {
      src: "/work/document-intelligence/03-stock.png",
      alt: "Daily entries list with search and structured data",
      caption: "Keep orderly stock control with easy search",
    },
    {
      src: "/work/document-intelligence/04-informes.png",
      alt: "Exits screen with automatic report generation",
      caption: "Generate reports automatically when you need them",
    },
  ],

  problem: {
    label: "THE PROBLEM",
    heading: "A simple task repeated every day.",
    paragraphs: [
      "The business received photographs or scanned images of tachograph tickets from vehicles entering or leaving the dealership.",
      "Relevant information had to be extracted and transferred manually into an existing Excel structure.",
      "The process was repetitive and required manual handling of information contained in documents.",
      "The vehicle information was also needed to maintain control over vehicles entering and leaving stock.",
    ],
  },

  beforeFlow: [
    "PHOTO / SCAN",
    "MANUAL READING",
    "MANUAL DATA ENTRY",
    "EXCEL",
    "STOCK CONTROL",
  ],

  opportunity: {
    heading: 'The opportunity was not "more software".',
    quote:
      "The opportunity was to remove unnecessary manual work from an existing process.",
    existingItems: ["documents", "an Excel structure", "an established stock workflow"],
    paragraphs: [
      "The objective was therefore not to replace everything. It was to introduce automation exactly where it created value.",
    ],
  },

  solution: {
    heading: "Turning documents into structured information.",
    paragraphs: [
      "The solution accepts photographs or scanned documents and uses AI to extract relevant information.",
      "The extracted information is then mapped into the existing Excel structure used by the business.",
      "The application also provides a simplified way to select which vehicles should enter or leave stock.",
    ],
    fields: ["MATRÍCULA", "BASTIDOR", "FECHA", "MODELO"],
  },

  howItWorks: [
    { label: "DOCUMENT", description: "Photo or scanned tachograph ticket." },
    { label: "AI / DOCUMENT ANALYSIS", description: "The document is analysed automatically." },
    { label: "DATA EXTRACTION", description: "Relevant vehicle information is identified." },
    { label: "STRUCTURED FIELDS", description: "The extracted information is converted into structured data." },
    { label: "EXCEL", description: "Data is transferred into the company's existing Excel structure." },
    { label: "STOCK CONTROL", description: "The user selects the vehicles entering or leaving stock." },
  ],

  userFlowHeading: "From document to stock.",
  userFlowNote: "The user remains in control at every step.",
  userFlow: [
    { step: "1", title: "UPLOAD", description: "User uploads or scans documents." },
    { step: "2", title: "ANALYZE", description: "The system analyses the document." },
    { step: "3", title: "REVIEW", description: "Extracted information can be reviewed." },
    { step: "4", title: "EXPORT", description: "Information is transferred into the existing Excel structure." },
    { step: "5", title: "STOCK", description: "Vehicles can be selected for entry or exit from stock." },
  ],

  evidencePlaceholders: [
    "Screenshot — document input",
    "Screenshot — extracted data",
    "Screenshot — stock control",
  ],

  builtWith: ["Python", "AI", "OCR / Document Intelligence", "Excel"],

  role: [
    "Business Problem Analysis",
    "Process Design",
    "Solution Design",
    "Python Development",
    "AI Integration",
    "Workflow Design",
    "Testing & Iteration",
  ],

  demonstrates: [
    { title: "UNDERSTAND THE PROCESS", description: "Understanding how the business actually works before proposing a solution." },
    { title: "IDENTIFY FRICTION", description: "Recognising repetitive manual tasks and unnecessary data handling." },
    { title: "APPLY AI", description: "Using AI where unstructured information needs to become structured data." },
    { title: "INTEGRATE", description: "Working with existing business tools instead of replacing them unnecessarily." },
    { title: "BUILD", description: "Turning the concept into a functional application." },
    { title: "THINK END-TO-END", description: "Considering the entire workflow rather than a single isolated task." },
  ],

  statusNote: "Developed as a practical solution for a real business workflow.",

  cta: {
    heading: "Have a repetitive process?",
    quoteLines: [
      "Maybe it doesn't need more people.",
      "Maybe it needs a better process.",
    ],
  },

  navigation: {
    next: { href: "/work/real-estate-automation", label: "Real Estate Automation" },
  },
};
