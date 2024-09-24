import { Term } from '../models';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { logger } from '../../../shared/core/src/utils/logger';
import { LANGUAGES } from '../config/languages-simple';
import { fetchTerms } from './fetch-terms';
import { saveTermsFile } from './save-terms-file';

const languages: string[] = LANGUAGES.map(language => language.value);

const main = async (): Promise<void> => {
  try {
    for (const language of languages) {
      const terms: Term[] = await fetchTerms(language);
      saveTermsFile(language, terms);
    }
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error('Error in main process:', errorMessage);
  }
};

main();
