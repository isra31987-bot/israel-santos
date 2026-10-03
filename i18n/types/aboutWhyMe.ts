export type AboutWhyMeContent = {
  metaDescription: string;
  intro: {
    label: string;
    heading: string[];
    supporting: string;
    paragraphs: string[];
    businessTitle: string;
    businessItems: string[];
    techTitle: string;
    techItems: string[];
    center: string;
  };
  path: {
    heading: string;
    evolution: string[];
    timeline: {
      period: string;
      title: string;
      items: string[];
    }[];
  };
  capabilities: {
    heading: string;
    items: { number: string; title: string; description: string }[];
  };
  howIWork: {
    heading: string;
    steps: { number: string; title: string; description: string }[];
    closing: string[];
  };
  technical: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  education: {
    heading: string;
    items: { title: string; subtitle?: string }[];
  };
  motivation: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  final: {
    heading: string[];
    supporting: string;
    ctaWork: string;
    ctaCv: string;
  };
};
