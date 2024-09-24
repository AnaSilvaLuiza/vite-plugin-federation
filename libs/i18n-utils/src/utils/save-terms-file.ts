import path from 'path';
import fs from 'fs';
import { Term } from '../models';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { logger } from '../../../shared/core/src/utils/logger';

export const saveTermsFile = (language: string, terms: Term[]): void => {
  const outputDir: string = path.resolve(`./libs/i18n-utils/src/assets/locales/${language}`);
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const namespacedTerms: Record<string, Term[]> = terms.reduce(
      (acc, term) => {
        if (!acc[term.reference]) {
          acc[term.reference] = [];
        }
        acc[term.reference].push(term);
        return acc;
      },
      {} as Record<string, Term[]>,
    );

    Object.entries(namespacedTerms).forEach(([reference, terms]) => {
      const termsObj: Record<string, any> = {};

      terms.forEach(term => {
        const keys = term.term.split('.');
        let currentObj = termsObj;

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!currentObj[key]) {
            currentObj[key] = {};
          }
          if (i === keys.length - 1) {
            currentObj[key] = term.translation.content;
          } else {
            currentObj = currentObj[key];
          }
        }
      });

      const jsonData: string = JSON.stringify(termsObj, null, 2);
      const filePath: string = path.join(outputDir, `${reference}.json`);
      fs.writeFileSync(filePath, jsonData);
      logger.success(`Terms saved to ${filePath}`);
    });
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error saving terms for ${language}:`, errorMessage);
  }
};
