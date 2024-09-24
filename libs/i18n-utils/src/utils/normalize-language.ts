export const normalizeLanguage = (language: string): string => {
  if (!language) return '';
  if (language === 'de-CH') return 'deCH';
  if (language === 'fr-CH') return 'frCH';
  if (language === 'it-CH') return 'frCH';
  if (language === 'it-CH') return 'itCH';
  if (language.startsWith('pt-')) return 'pt';
  return language;
};
