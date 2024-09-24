export interface Term {
  term: string;
  context: string;
  plural: string;
  created: string;
  updated: string;
  translation: {
    content: string;
    fuzzy: number;
    proofread: number;
    updated: string;
  };
  reference: string;
  tags: string[];
  comment: string;
}
