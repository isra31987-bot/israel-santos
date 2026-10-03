import type { AboutWhyMeContent } from "@/i18n/types/aboutWhyMe";
import type { CvPageContent } from "@/i18n/types/cvPage";
import type { ExperimentsContent } from "@/i18n/types/experiments";
import type { PrivacyContent } from "@/i18n/types/privacy";

export type SelectedProject = {
  number: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  context?: string;
  technologies: string[];
  status: string;
  workflow: string[];
  workflowLayout: "horizontal" | "vertical";
  layout: "large" | "featured" | "compact";
  placeholderLabel: string;
  /** Si true, no muestra placeholder ni galería en Selected Work */
  hideVisual?: boolean;
};

export type Dictionary = {
  locale: "es" | "en";
  profile: {
    name: string;
    fullName: string;
    title: string;
    brand: string;
    headline: string;
    subheadline: string;
    claim: string[];
    tags: string[];
    email: string;
    phone: string;
    city: string;
    english: string;
    footerLine: string;
  };
  nav: { href: string; label: string }[];
  home: {
    ctaProjects: string;
    ctaCv: string;
    scrollHint: string;
  };
  homeClosing: {
    value: {
      label: string;
      heading: string[];
      supporting: string;
      items: string[];
    };
    contact: {
      label: string;
      heading: string;
      supporting: string;
      ctaContact: string;
      ctaAbout: string;
    };
  };
  approach: {
    label: string;
    heading: string;
    tagline: string[];
    closing: string[];
    steps: { number: string; label: string; question: string }[];
  };
  process: {
    ariaLabel: string;
    steps: { number: string; label: string }[];
  };
  selectedWork: {
    label: string;
    heading: string[];
    supporting: string;
    viewCase: string;
    projectVisual: string;
    screenshotComing: string;
    workflowAria: string;
  };
  work: {
    label: string;
    heading: string;
    intro: string;
    viewCase: string;
  };
  aboutWhyMe: AboutWhyMeContent;
  contact: {
    label: string;
    heading: string;
    intro: string;
    email: string;
    phone: string;
    location: string;
    footerNote: string;
    ctaEmail: string;
    ctaWhatsapp: string;
    ctaWork: string;
    metaDescription: string;
    emailSubject: string;
    form: {
      name: string;
      namePlaceholder: string;
      emailField: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      channelLabel: string;
      channelEmail: string;
      channelWhatsapp: string;
      submitEmail: string;
      submitWhatsapp: string;
      hintEmail: string;
      hintWhatsapp: string;
      statusSending: string;
      statusSuccessEmail: string;
      statusSuccessWhatsapp: string;
      statusError: string;
      statusNotConfigured: string;
    };
  };
  cv: CvPageContent;
  video: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    comingSoon: string;
    seedance: string;
    noVideoSupport: string;
    methodSteps: string[];
  };
  navbar: {
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    navAria: string;
    mobileAria: string;
  };
  caseStudyUi: {
    backToWork: string;
    selectedWork: string;
    projectScreenshot: string;
    before: string;
    beforeAria: string;
    businessAlreadyHad: string;
    howItWorks: string;
    insideSolution: string;
    demoVideo: string;
    videoComing: string;
    builtWith: string;
    techNote: string;
    myRole: string;
    demonstrates: string;
    projectStatus: string;
    exploreMore: string;
    getInTouch: string;
    previous: string;
    next: string;
    selectedWorkNav: string;
    projectVisual: string;
    screenshotComing: string;
    closeLightbox: string;
  };
  slugPage: {
    backToWork: string;
    problem: string;
    analyze: string;
    solution: string;
    technologies: string;
    status: string;
  };
  metadata: {
    approachDescription: string;
    workDescription: string;
    caseStudySuffix: string;
  };
  experiments: ExperimentsContent;
  privacy: PrivacyContent;
  cookies: {
    message: string;
    privacyLink: string;
    accept: string;
    decline: string;
  };
  footer: {
    experimentsLink: string;
    privacyLink: string;
  };
  projects: {
    number: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    analysis: string;
    solution: string;
    technologies: string[];
    status: string;
  }[];
  selectedProjects: SelectedProject[];
};
