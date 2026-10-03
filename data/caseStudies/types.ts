// Tipos compartidos para páginas de case study.

export type CaseStudyFlowStep = {
  label: string;
  description: string;
};

export type CaseStudyUserStep = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudyCapability = {
  title: string;
  description: string;
};

export type CaseStudyNavLink = {
  href: string;
  label: string;
};

export type CaseStudyScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudyData = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  technologies: string[];
  status: string;
  /** Capturas reales: si existen, sustituyen placeholders visuales */
  screenshots?: CaseStudyScreenshot[];
  problem: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  beforeFlow: string[];
  opportunity: {
    heading: string;
    quote: string;
    existingItems?: string[];
    paragraphs: string[];
  };
  solution: {
    heading: string;
    paragraphs: string[];
    fields?: string[];
  };
  howItWorks: CaseStudyFlowStep[];
  userFlowHeading: string;
  userFlowNote?: string;
  userFlow: CaseStudyUserStep[];
  evidencePlaceholders: string[];
  builtWith: string[];
  role: string[];
  demonstrates: CaseStudyCapability[];
  statusNote: string;
  cta: {
    heading: string;
    quoteLines: string[];
  };
  navigation: {
    previous?: CaseStudyNavLink;
    next?: CaseStudyNavLink;
  };
};
