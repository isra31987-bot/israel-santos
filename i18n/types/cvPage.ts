export type CvPageContent = {
  metaDescription: string;
  pageTitle: string;
  backHome: string;
  print: string;
  header: {
    name: string;
    title: string;
    tagline: string;
    emailLabel: string;
    linkedinLabel: string;
    portfolioLabel: string;
    linkedinPlaceholder: string;
  };
  profile: {
    heading: string;
    paragraphs: string[];
  };
  logistics: {
    heading: string;
    companyLine: string;
    dates: string;
    subheading: string;
    intro: string;
    bullets: string[];
    highlight: string;
  };
  amazon: {
    heading: string;
    companyLine: string;
    subheading: string;
    intro: string;
    bullets: string[];
  };
  projects: {
    heading: string;
    viewCase: string;
    items: {
      number: string;
      title: string;
      slug: string;
      technology: string;
      description: string;
      descriptor: string;
    }[];
  };
  capabilities: {
    heading: string;
    items: { title: string; description: string }[];
  };
  technology: {
    heading: string;
    groups: { title: string; items: string[] }[];
  };
  education: {
    heading: string;
    items: { title: string; subtitle?: string; detail?: string }[];
  };
  languages: {
    heading: string;
    items: { language: string; level: string }[];
  };
  lookingFor: {
    heading: string;
    paragraphs: string[];
  };
  finalCta: {
    heading: string;
    supporting: string;
    ctaWork: string;
    ctaCv: string;
    ctaContact: string;
  };
};
