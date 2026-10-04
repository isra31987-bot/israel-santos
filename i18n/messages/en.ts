import type { Dictionary } from "@/i18n/types";
import { aboutWhyMeEn } from "@/i18n/content/aboutWhyMe.en";
import { cvPageEn } from "@/i18n/content/cvPage.en";
import { experimentsEn } from "@/i18n/content/experiments.en";
import { privacyEn } from "@/i18n/content/privacy.en";

export const en: Dictionary = {
  locale: "en",
  profile: {
    name: "Israel Santos",
    fullName: "Israel Santos López",
    title: "Business & Digital Transformation Analyst",
    brand: "Business × Technology",
    headline: "I turn business problems into digital solutions.",
    subheadline:
      "I analyze processes, identify inefficiencies and design solutions using AI, automation and technology.",
    claim: [
      "I understand the business.",
      "I find the friction.",
      "I build the solution.",
    ],
    tags: [
      "Business Analysis",
      "Process Optimization",
      "AI & Automation",
      "Digital Solutions",
    ],
    email: "isra31987@gmail.com",
    phone: "+34 677 230 612",
    city: "Gandía (Valencia)",
    english: "B1",
    footerLine: "Built to connect technology, business vision and AI",
  },
  nav: [
    { href: "/work", label: "Work" },
    { href: "/approach", label: "Approach" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  home: {
    ctaProjects: "VIEW PROJECTS →",
    ctaCv: "DOWNLOAD CV",
    scrollHint: "SCROLL TO EXPLORE ↓",
  },
  homeClosing: {
    value: {
      label: "WHAT I BRING",
      heading: ["REAL SOLUTIONS", "FOR REAL PROCESSES"],
      supporting:
        "I combine real operations experience with the ability to analyse processes, find friction and build practical digital solutions.",
      items: [
        "Process analysis and inefficiency detection",
        "Automation and integrations (APIs, n8n, AI)",
        "Prototypes and internal tools",
        "AI applied to operations and documentation",
      ],
    },
    contact: {
      label: "LET'S TALK",
      heading: "Looking for a business × technology profile?",
      supporting:
        "If you have an opportunity where I can add value, write to me. I'm open to a conversation.",
      ctaContact: "GET IN TOUCH →",
      ctaAbout: "VIEW MY PROFILE →",
    },
  },
  approach: {
    label: "Approach",
    heading: "I DON'T START WITH TECHNOLOGY.",
    tagline: [
      "Technology changes constantly.",
      "Business problems don't.",
    ],
    closing: ["Technology is the means.", "The solution is the goal."],
    steps: [
      {
        number: "01",
        label: "UNDERSTAND",
        question: "What does the business actually need?",
      },
      {
        number: "02",
        label: "MAP",
        question: "How does the current process work?",
      },
      {
        number: "03",
        label: "IDENTIFY",
        question: "Where is the friction?",
      },
      {
        number: "04",
        label: "DESIGN",
        question: "What should the ideal process look like?",
      },
      {
        number: "05",
        label: "BUILD",
        question: "What technology can solve it?",
      },
      {
        number: "06",
        label: "ITERATE",
        question: "Does it work? What can be improved?",
      },
    ],
  },
  process: {
    ariaLabel: "Method: Problem, Analyze, Design, Automate, Build",
    steps: [
      { number: "01", label: "PROBLEM" },
      { number: "02", label: "ANALYZE" },
      { number: "03", label: "DESIGN" },
      { number: "04", label: "AUTOMATE" },
      { number: "05", label: "BUILD" },
    ],
  },
  selectedWork: {
    label: "Selected Work",
    heading: ["REAL PROBLEMS.", "DIGITAL SOLUTIONS."],
    supporting:
      "Projects built to simplify processes, automate repetitive work, analyse information and turn business needs into functional digital solutions.",
    viewCase: "View case →",
    projectVisual: "Project visual",
    screenshotComing: "Screenshot coming",
    workflowAria: "Project workflow",
  },
  work: {
    label: "Work",
    heading: "Selected work",
    intro:
      "Four cases where a business problem became a digital solution.",
    viewCase: "View case →",
  },
  aboutWhyMe: aboutWhyMeEn,
  contact: {
    label: "Contact",
    heading: "Looking for a business × technology profile?",
    intro:
      "If you have an opportunity where process analysis and digital solutions can add value, write to me. I'm open to a conversation.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    footerNote:
      "I'm looking to join a team where I can bring business experience and the ability to build solutions. A short conversation is enough to start.",
    ctaEmail: "SEND EMAIL →",
    ctaWhatsapp: "WHATSAPP →",
    ctaWork: "VIEW PROJECTS",
    metaDescription:
      "Contact Israel Santos — Business Analyst & Digital Transformation. Open to job opportunities.",
    emailSubject: "Job opportunity — Israel Santos",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      emailField: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder:
        "Tell me about the role, the team or the opportunity context…",
      channelLabel: "Channel",
      channelEmail: "Email",
      channelWhatsapp: "WhatsApp",
      submitEmail: "SEND MESSAGE →",
      submitWhatsapp: "SEND VIA WHATSAPP →",
      hintEmail: "Your message is delivered to my inbox. I can reply from there.",
      hintWhatsapp:
        "WhatsApp will open with your message ready. Just tap send.",
      statusSending: "Sending…",
      statusSuccessEmail: "Message sent. I'll get back to you soon.",
      statusSuccessWhatsapp: "Opening WhatsApp…",
      statusError: "Couldn't send. Please try again or email me directly.",
      statusNotConfigured:
        "Email delivery is not configured on the server yet. Use WhatsApp or the direct email link.",
      scheduleTitle: "Prefer to book a slot directly?",
      scheduleHint:
        "Pick a time on the calendar. You can still send the message below.",
      scheduleOpen: "Open calendar →",
    },
  },
  cv: cvPageEn,
  video: {
    label: "Video",
    title: "The method in 60 seconds",
    subtitle: "Not a personal intro — the process.",
    description:
      "Observe the business → analyze the process → design the solution → automate where it helps → build what delivers value.",
    duration: "45–60 s",
    comingSoon: "Video coming soon",
    seedance: "Seedance 2.5",
    noVideoSupport: "Your browser does not support HTML5 video.",
    methodSteps: ["Observe", "Analyze", "Design", "Automate", "Build"],
  },
  navbar: {
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navAria: "Main",
    mobileAria: "Mobile",
  },
  caseStudyUi: {
    backToWork: "← BACK TO WORK",
    selectedWork: "SELECTED WORK",
    projectScreenshot: "Project screenshot",
    before: "Before",
    beforeAria: "Workflow before automation",
    businessAlreadyHad: "The business already had:",
    howItWorks: "How it works",
    insideSolution: "Inside the solution",
    demoVideo: "Short demo video",
    videoComing: "Video coming",
    builtWith: "Built with",
    techNote:
      "The technology was selected according to the problem rather than the other way around.",
    myRole: "My role",
    demonstrates: "What this project demonstrates",
    projectStatus: "Project status",
    exploreMore: "EXPLORE MORE PROJECTS →",
    getInTouch: "GET IN TOUCH →",
    previous: "← PREVIOUS",
    next: "NEXT →",
    selectedWorkNav: "SELECTED WORK",
    projectVisual: "Project visual",
    screenshotComing: "Screenshot coming",
    closeLightbox: "Close",
  },
  slugPage: {
    backToWork: "← Back to Work",
    problem: "Problem",
    analyze: "Analysis",
    solution: "Solution",
    technologies: "Technologies",
    status: "Status",
  },
  metadata: {
    approachDescription:
      "I don't start with technology. Six stages from understanding the business to iterating the solution.",
    workDescription:
      "Four case studies where business problems became digital solutions.",
    caseStudySuffix: "Case Study",
  },
  projects: [
    {
      number: "01",
      slug: "document-intelligence",
      title: "Document Intelligence",
      subtitle: "From paper documents → structured data",
      description:
        "AI automation to extract information from tachograph tickets for document management and stock control at a vehicle dealership.",
      problem:
        "A vehicle dealership received photos or scans of tachograph tickets and manually recorded plate, VIN, date, km and model to update its Excel stock file.",
      analysis:
        "Repetitive, slow and error-prone process. The same fields repeated on every ticket with no duplicate validation.",
      solution:
        "Python/Tkinter app (Control Vehículos) that processes images with Gemini Vision, validates VIN and plate, confirms model/type and writes to Control_Vehiculos.xlsx (ENTRADAS → STOCK → SALIDAS). Daily reports and automatic backup.",
      technologies: ["Python", "AI", "OCR / Document Intelligence", "Excel"],
      status: "REAL BUSINESS SOLUTION",
    },
    {
      number: "02",
      slug: "real-estate-automation",
      title: "Real Estate Automation",
      subtitle: "From fragmented workflows → connected system",
      description:
        "A tool for the real-estate sector that connects leads, email, market, stock, alerts and document generation in a single workflow.",
      problem:
        "A real estate professional managed email, Meta leads, portals, stock and contracts in separate flows with no shared base.",
      analysis:
        "Each channel operated in isolation. A system was needed to unify information and automate alerts and documents.",
      solution:
        "InmoFlow: AI Inbox (Gemini), inventory, tracker with Milanuncios scraping, Kanban funnel for Meta leads (n8n) and document generation from Supabase templates.",
      technologies: [
        "Supabase",
        "SQL",
        "n8n",
        "Gemini",
        "Meta",
        "APIs",
        "Web Scraping",
      ],
      status: "FUNCTIONAL SOLUTION",
    },
    {
      number: "03",
      slug: "logicalc",
      title: "Logicalc",
      subtitle: "From transport experience → SaaS product",
      description:
        "A profitability analysis tool designed to help small transport professionals make day-to-day decisions.",
      problem:
        "Self-employed carriers and small fleets accepted trips without real visibility of fuel, insurance, maintenance and other operating costs.",
      analysis:
        "They received a trip price without being able to quickly calculate net profit or accumulated profitability over a period.",
      solution:
        "LogiCalc (Next.js): per-trip and period profitability calculator, historical registry, cost profile with admin approval. PostgreSQL on Supabase, deployed on Vercel. Designed as SaaS.",
      technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
      status: "FUNCTIONAL PRODUCT / MVP",
    },
    {
      number: "04",
      slug: "lead-intelligence",
      title: "Lead Intelligence",
      subtitle: "From social data → commercial opportunities",
      description:
        "An experimental tool to identify and prioritize potential clients from public audience data.",
      problem:
        "Identifying potential clients among followers of relevant Instagram accounts in a sector.",
      analysis:
        "Manually browsing audiences does not scale. What matters is detecting profiles appearing across multiple accounts in the same niche.",
      solution:
        "Capturer on LDPlayer + OCR (Tesseract) + audience cross-match with scoring and TXT/Excel export. GUI in app.py. Experimental; no official Instagram API.",
      technologies: ["Data", "Automation", "Analysis", "Python"],
      status: "EXPERIMENTAL / FUNCTIONAL",
    },
  ],
  selectedProjects: [
    {
      number: "01",
      slug: "document-intelligence",
      category: "REAL BUSINESS SOLUTION",
      title: "Document Intelligence",
      subtitle: "From paper documents → structured data",
      description:
        "AI automation to extract information from tachograph tickets for document management and stock control at a vehicle dealership.",
      context:
        "The original flow received photos or scans of tachograph tickets for vehicles entering or leaving the dealership. The tool uses AI to extract plate, VIN, date and model, transfer data to the business Excel structure and simplify stock entries and exits.",
      technologies: ["Python", "AI", "OCR / Document Intelligence", "Excel"],
      status: "REAL BUSINESS SOLUTION",
      workflow: [
        "DOCUMENT",
        "AI EXTRACTION",
        "STRUCTURED DATA",
        "EXCEL",
        "STOCK CONTROL",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Document Intelligence",
      hideVisual: true,
    },
    {
      number: "02",
      slug: "real-estate-automation",
      category: "FUNCTIONAL SOLUTION",
      title: "Real Estate Automation",
      subtitle: "From fragmented workflows → connected system",
      description:
        "A tool for the real-estate sector that connects leads, email, market, stock, alerts and document generation in a single workflow.",
      context:
        "Built for a real estate professional (InmoFlow). Includes automated email management, market monitoring, portal scraping (Idealista, Milanuncios), opportunity detection, stock management, expiry alerts, Meta leads and document generation from client templates. SQL base on Supabase; AI with Gemini.",
      technologies: [
        "Supabase",
        "SQL",
        "n8n",
        "Gemini",
        "Meta",
        "APIs",
        "Web Scraping",
      ],
      status: "FUNCTIONAL SOLUTION",
      workflow: [
        "LEADS + MARKET + EMAIL + STOCK",
        "CENTRAL DATABASE",
        "AUTOMATION",
        "ACTIONS / DOCUMENTS / ALERTS",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Real Estate Automation",
      hideVisual: true,
    },
    {
      number: "03",
      slug: "logicalc",
      category: "FUNCTIONAL PRODUCT / MVP",
      title: "Logicalc",
      subtitle: "From transport experience → SaaS product",
      description:
        "A profitability analysis tool designed to help small transport professionals make day-to-day decisions.",
      context:
        "Born from direct experience in the transport sector. Many self-employed carriers receive a trip price without real visibility of fuel, insurance, maintenance and other operating costs. Calculates per-trip and accumulated profitability over a period. Designed as subscription SaaS.",
      technologies: ["Next.js", "React", "Node.js", "Supabase", "SQL"],
      status: "FUNCTIONAL PRODUCT / MVP",
      workflow: ["TRIP + COSTS", "PROFITABILITY", "ACCEPT / REJECT"],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Logicalc",
      hideVisual: true,
    },
    {
      number: "04",
      slug: "lead-intelligence",
      category: "EXPERIMENTAL / FUNCTIONAL",
      title: "Lead Intelligence",
      subtitle: "From social data → commercial opportunities",
      description:
        "An experimental tool to identify and prioritize potential clients from public audience data.",
      technologies: ["Data", "Automation", "Analysis", "Python"],
      status: "EXPERIMENTAL / FUNCTIONAL",
      workflow: [
        "SOCIAL DATA",
        "EXTRACTION",
        "COMPARISON",
        "PRIORITIZATION",
      ],
      layout: "large",
      workflowLayout: "horizontal",
      placeholderLabel: "Lead Intelligence",
      hideVisual: true,
    },
  ],
  experiments: experimentsEn,
  privacy: privacyEn,
  cookies: {
    message: "We use optional analytics cookies to improve this site.",
    privacyLink: "Privacy",
    accept: "Accept",
    decline: "Decline",
  },
  footer: {
    experimentsLink: "Personal experiments →",
    privacyLink: "Privacy",
  },
  chatbot: {
    kicker: "Want to ask me something?",
    title: "Ask about my profile",
    hint: "",
    welcome: "",
    suggestions: [],
    placeholder: "Type your question…",
    inputLabel: "Ask the assistant",
    send: "Send",
    open: "Want to ask me something?",
    close: "Close",
    typing: "Thinking…",
    errorGeneric: "Could not reply. Try again or email me.",
    errorNotConfigured:
      "Chat is not configured yet. Email isra31987@gmail.com instead.",
    errorRateLimited: "Too many questions. Wait a minute and try again.",
  },
};
