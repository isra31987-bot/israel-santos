import type { CvPageContent } from "@/i18n/types/cvPage";

export const cvPageEn: CvPageContent = {
  metaDescription:
    "Business & Digital Transformation Analyst. Logistics operations, Amazon e-commerce and hands-on digital solutions with AI and automation.",
  pageTitle: "CV",
  backHome: "← BACK TO HOME",
  print: "PRINT / SAVE PDF →",
  header: {
    name: "Israel Santos",
    title: "BUSINESS & DIGITAL TRANSFORMATION ANALYST",
    tagline: "Process Improvement · Automation · AI · Digital Solutions",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    portfolioLabel: "Portfolio",
    linkedinPlaceholder: "[pending]",
  },
  profile: {
    heading: "BUSINESS × TECHNOLOGY",
    paragraphs: [
      "Economist with over a decade of experience in logistics, administration and business operations, combined with hands-on experience designing and building digital solutions using AI, automation and modern development tools.",
      "I analyse business processes, identify inefficiencies and translate operational needs into practical digital solutions. I have built internal tools, automations and database-backed applications using Python, JavaScript/TypeScript, React, Next.js, SQL, Supabase, APIs, n8n and AI.",
      "My differentiator is the combination of real business and operational experience with the ability to design and prototype technology-driven solutions.",
    ],
  },
  logistics: {
    heading: "LOGISTICS & OPERATIONS",
    companyLine: "Transport & logistics company · Spain",
    dates: "2014 – 2026",
    subheading: "Administration · Operations · Business management",
    intro:
      "Cross-functional experience managing administrative and operational processes in a transport company, working with information from operations, warehouse, customers, suppliers and internal systems.",
    bullets: [
      "Management of administrative and operational processes.",
      "Document management and delivery note control.",
      "Invoicing and invoice control.",
      "Supplier, payment, customer and collections management.",
      "Cost control.",
      "Warehouse stock management and control.",
      "Credit, goods and liability insurance management.",
      "Documentation management on client and supplier platforms.",
      "Preparation of information for tax and administrative processes.",
      "Use of CRM, Excel and Google Sheets to structure, control and analyse information.",
      "Identification of repetitive tasks and improvement opportunities through digital tools.",
    ],
    highlight:
      "Over a decade working from inside an operations company, understanding how information flows between administration, warehouse, suppliers, customers and operations.",
  },
  amazon: {
    heading: "AMAZON E-COMMERCE & DIGITAL BUSINESS",
    companyLine: "Independent Business Project · Spain & Italy",
    subheading: "Product · Operations · Analytics · PPC",
    intro:
      "End-to-end product cycle management, from opportunity identification and sourcing to commercialisation, traffic acquisition and performance analysis.",
    bullets: [
      "Identification and analysis of product opportunities with commercial potential.",
      "Market research and supplier sourcing in Asia.",
      "Requesting, comparing and analysing quotations.",
      "Supplier negotiation.",
      "Coordination of purchases, transport, reception, labelling and preparation of goods for Amazon FBA.",
      "Product management on Amazon Spain and Italy.",
      "Listing design, structure and optimisation.",
      "Keyword research and analysis.",
      "Design and management of PPC campaigns with specific objectives.",
      "Product and campaign performance analysis using Helium 10.",
      "Development of optimised prompts to analyse campaign performance and support decision-making.",
      "Commercial data analysis to optimise products, campaigns and profitability.",
    ],
  },
  projects: {
    heading: "DIGITAL PROJECTS & AI AUTOMATION",
    viewCase: "VIEW CASE STUDY →",
    items: [
      {
        number: "01",
        title: "DOCUMENT INTELLIGENCE",
        slug: "document-intelligence",
        technology: "Python · AI · Data Extraction · Excel",
        description:
          "I designed and developed a Python tool to automate the processing of digitised tachograph tickets. AI extracts information such as registration, chassis, date and model, structures it according to the company's format and automatically incorporates it into Excel, generating daily reports and facilitating vehicle stock management.",
        descriptor:
          "AI applied to document processing · Data extraction · Workflow automation · Internal tools",
      },
      {
        number: "02",
        title: "REAL ESTATE OPERATIONS AUTOMATION",
        slug: "real-estate-automation",
        technology: "Python · Supabase · SQL · AI · APIs · n8n",
        description:
          "I designed and developed a functional database-backed prototype to automate and centralise the day-to-day operations of a real-estate professional. Includes email automation, property-market monitoring, inventory management, Meta lead processing, notifications and automatic generation of sales and deposit agreement documents.\n\nThe system uses the client's own templates, automatically completes available information and generates forms for the remaining variable fields.",
        descriptor:
          "Process automation · Database design · AI · APIs · Workflow orchestration · Document generation",
      },
      {
        number: "03",
        title: "LOGICALC",
        slug: "logicalc",
        technology: "Next.js · React · Node.js · SQL · Supabase",
        description:
          "I designed and developed Logicalc from a problem identified during my experience in the transport sector: many self-employed operators accept trips without knowing their actual profitability in advance.\n\nThe application calculates the profitability of each trip and analyses cumulative performance considering sector-specific costs such as fuel, insurance and maintenance.",
        descriptor:
          "Business problem identification · Product design · SaaS development · Data modelling · Industry knowledge",
      },
      {
        number: "04",
        title: "LEAD INTELLIGENCE",
        slug: "lead-intelligence",
        technology: "Instagram data · Automation · Data analysis",
        description:
          "Tool designed to identify potential customers by analysing followers of relevant Instagram accounts, comparing audiences and ranking recurring profiles across multiple sources.",
        descriptor: "Lead generation · Data analysis · Automation · Prospecting",
      },
    ],
  },
  capabilities: {
    heading: "HOW I CAN ADD VALUE",
    items: [
      {
        title: "ANALYSE",
        description:
          "Understand how a process works, locate friction and identify improvement opportunities.",
      },
      {
        title: "DESIGN",
        description: "Translate a business need into a concrete digital solution.",
      },
      {
        title: "AUTOMATE",
        description: "Remove repetitive tasks by connecting tools, APIs, data and AI.",
      },
      {
        title: "BUILD",
        description: "Create prototypes and functional tools to validate a solution quickly.",
      },
      {
        title: "CONNECT DATA",
        description: "Structure information and turn it into useful tools for decision-making.",
      },
      {
        title: "APPLY AI",
        description:
          "Use AI where it can add real value to the process — not simply as trendy technology.",
      },
    ],
  },
  technology: {
    heading: "TECHNOLOGY & TOOLS",
    groups: [
      {
        title: "AI & AUTOMATION",
        items: ["AI", "Prompt Engineering", "n8n", "APIs", "Workflow Automation"],
      },
      {
        title: "DEVELOPMENT",
        items: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
      },
      {
        title: "DATA",
        items: ["SQL", "Supabase", "MongoDB", "Excel", "Google Sheets"],
      },
      {
        title: "TOOLS",
        items: ["GitHub", "Cursor", "Helium 10"],
      },
    ],
  },
  education: {
    heading: "EDUCATION",
    items: [
      {
        title: "Degree in Economics",
        subtitle: "Universidad de Castilla-La Mancha",
      },
      {
        title: "Master's Degree in International Trade",
      },
      {
        title: "Specialist in AI-Assisted Programming",
        subtitle: "Racks Academy",
      },
    ],
  },
  languages: {
    heading: "LANGUAGES",
    items: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "B1" },
    ],
  },
  lookingFor: {
    heading: "WHAT I'M LOOKING FOR",
    paragraphs: [
      "I want to join teams where I can use my business and operations experience to identify problems, improve processes and develop digital solutions that deliver real value.",
      "I am particularly interested in roles related to Business Analysis, Digital Transformation, Process Improvement, Automation, Operations Technology and AI applied to business.",
    ],
  },
  finalCta: {
    heading: "BUSINESS × TECHNOLOGY",
    supporting: "That's where I believe I can create the most value.",
    ctaWork: "VIEW MY PROJECTS →",
    ctaCv: "DOWNLOAD CV →",
    ctaContact: "CONTACT →",
  },
};
