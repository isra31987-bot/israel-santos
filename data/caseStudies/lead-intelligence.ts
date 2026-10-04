import type { CaseStudyData } from "./types";

// Instagram Lead Extractor — experimental. Sin API oficial ni resultados comerciales inventados.

export const leadIntelligenceCase: CaseStudyData = {
  slug: "lead-intelligence",
  number: "04",
  category: "DATA × AUTOMATION",
  title: "Lead Intelligence",
  subtitle: "From social data → commercial opportunities",
  intro:
    "An experimental tool to identify and prioritise potential clients from public audience data on Instagram.",
  technologies: ["Data", "Automation", "Analysis", "Python"],
  status: "EXPERIMENTAL / FUNCTIONAL",

  screenshots: [
    {
      src: "/work/lead-intelligence/01-dashboard.jpg",
      alt: "Lead Intelligence performance dashboard overview",
      caption: "Modern and user-friendly interface",
    },
    {
      src: "/work/lead-intelligence/02-extraccion.jpg",
      alt: "Lead Intelligence data acquisition and OCR extraction hub",
      caption: "Data extraction and OCR",
    },
    {
      src: "/work/lead-intelligence/03-cruce.jpg",
      alt: "Lead Intelligence audience cross-reference and intersection",
      caption: "Audience crossing and intersection",
    },
    {
      src: "/work/lead-intelligence/04-scoring.jpg",
      alt: "Lead Intelligence lead scoring and prioritization",
      caption: "Lead scoring and prioritization system",
    },
  ],
  screenshotsNote:
    "Interface and metrics shown via simulations with anonymised data for privacy and data-protection reasons.",

  problem: {
    label: "THE PROBLEM",
    heading: "Audiences exist. Opportunities are hard to find.",
    paragraphs: [
      "In a specific sector, relevant Instagram accounts accumulate followers who may be potential clients — but the lists are large and unstructured.",
      "Manually scrolling through follower lists does not scale. A single follower on one account is weak signal.",
      "What matters is finding profiles that appear across multiple relevant accounts in the same niche — a sign of genuine sector interest.",
      "There was no simple way to capture, compare and rank those audiences.",
    ],
  },

  beforeFlow: [
    "OPEN FOLLOWER LIST",
    "MANUAL SCROLLING",
    "COPY USERNAMES",
    "SPREADSHEET COMPARE",
    "GUESS PRIORITY",
  ],

  opportunity: {
    heading: 'The opportunity was not "social media marketing".',
    quote:
      "The opportunity was to turn public audience overlap into a ranked list of potential leads.",
    existingItems: [
      "public follower lists on Instagram",
      "several relevant accounts in the same sector",
      "a need to prioritise outreach, not collect random names",
    ],
    paragraphs: [
      "The tool did not need to post, message or automate outreach. It needed to answer: who appears in multiple relevant audiences, and who should be contacted first?",
    ],
  },

  solution: {
    heading: "Capture, extract, compare, rank.",
    paragraphs: [
      "A desktop pipeline in Python: an automated capturer scrolls follower lists in an Android emulator (LDPlayer), screenshots each batch, and an OCR analyser extracts @usernames with noise filtering.",
      "When multiple accounts are scanned, the tool cross-references audiences and assigns a score based on how many accounts each profile appears in.",
      "Results export to TXT and Excel, ready for manual review. A unified GUI (app.py) combines capture and analysis in one interface.",
    ],
    fields: ["CAPTURE", "OCR", "CROSS-MATCH", "SCORING", "EXPORT"],
  },

  howItWorks: [
    { label: "CAPTURE", description: "Automated screenshots of follower lists via LDPlayer scroll automation." },
    { label: "OCR EXTRACTION", description: "Tesseract reads usernames from cropped screen regions with anti-noise filters." },
    { label: "CROSS-MATCH", description: "Audiences from multiple accounts are compared to find overlapping profiles." },
    { label: "SCORING & EXPORT", description: "Profiles ranked by overlap count and exported to TXT / Excel." },
  ],

  userFlowHeading: "From accounts to ranked leads.",
  userFlowNote: "The user reviews and decides who to contact. The tool does not automate outreach.",
  userFlow: [
    { step: "1", title: "TARGET", description: "Select relevant Instagram accounts in the sector." },
    { step: "2", title: "CAPTURE", description: "The capturer scrolls and screenshots follower lists automatically." },
    { step: "3", title: "EXTRACT", description: "OCR pulls @usernames and filters UI noise and false reads." },
    { step: "4", title: "COMPARE", description: "Audiences are cross-matched to find overlapping profiles." },
    { step: "5", title: "EXPORT", description: "Ranked leads export to TXT or Excel for manual review." },
  ],

  evidencePlaceholders: [
    "Screenshot — capture interface",
    "Screenshot — OCR extraction",
    "Screenshot — audience cross-match",
    "Screenshot — ranked export",
  ],

  builtWith: [
    "Python",
    "Tkinter",
    "Tesseract OCR",
    "pyautogui",
    "OpenCV",
    "openpyxl",
  ],

  role: [
    "Problem Definition",
    "Process Automation Design",
    "OCR Pipeline Design",
    "Python Development",
    "Data Filtering & Scoring Logic",
    "Desktop GUI (Tkinter)",
    "Testing & Iteration",
  ],

  demonstrates: [
    { title: "WORK WITH PUBLIC DATA", description: "Extracting signal from publicly visible follower lists." },
    { title: "AUTOMATE REPETITIVE CAPTURE", description: "Replacing manual scrolling with scripted screenshot collection." },
    { title: "STRUCTURE UNSTRUCTURED DATA", description: "Turning screen images into clean username lists via OCR." },
    { title: "FIND PATTERNS ACROSS SOURCES", description: "Cross-matching audiences to surface overlapping profiles." },
    { title: "PRIORITISE, NOT SPRAY", description: "Scoring leads by relevance instead of exporting raw lists." },
    { title: "EXPERIMENT WITH CONSTRAINTS", description: "Built without official API access — pragmatic automation instead." },
  ],

  statusNote:
    "Experimental and functional for internal use. Depends on an Android emulator and does not use the official Instagram API. No commercial results claimed.",

  cta: {
    heading: "Sitting on unstructured data?",
    quoteLines: [
      "Maybe the opportunity isn't more data.",
      "Maybe it's better analysis.",
    ],
  },

  navigation: {
    previous: { href: "/work/logicalc", label: "Logicalc" },
  },
};
