export interface TermExport {
  term: string;
  context: string;
  reference: string;
  plural: string;
  comment: string;
  translation: string;
}

export interface TermsFileContent {
  [key: string]: string | TermsFileContent;
}
