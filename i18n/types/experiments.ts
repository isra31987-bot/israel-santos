export type ExperimentsContent = {
  metaDescription: string;
  label: string;
  heading: string;
  intro: string;
  note: string;
  items: {
    name: string;
    blurb: string;
    status: string;
  }[];
};
