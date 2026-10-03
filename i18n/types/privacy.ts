export type PrivacyContent = {
  metaDescription: string;
  title: string;
  updated: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};
