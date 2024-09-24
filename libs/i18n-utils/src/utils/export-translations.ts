import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { TermExport, TermsFileContent } from '../models';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { logger } from '../../../shared/core/src/utils/logger';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const exportLanguages = ['en', 'de', 'de-CH', 'pt', 'sv'];
const apiToken: string = process.env.POEDITOR_API_TOKEN || '';
const projectId: string = process.env.POEDITOR_PROJECT_ID || '';
const listTermsUrl = 'https://api.poeditor.com/v2/terms/list';
const addTermsUrl = 'https://api.poeditor.com/v2/terms/add';
const addTranslationsUrl = 'https://api.poeditor.com/v2/translations/add';

const readTermsFromFile = (filePath: string): TermsFileContent => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data) as TermsFileContent;
    } else {
      logger.warn(`File not found: ${filePath}`);
      return {};
    }
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error reading file ${filePath}:`, errorMessage);
    return {};
  }
};

const flattenTerms = (obj: TermsFileContent, prefix = '', namespace = ''): TermExport[] => {
  const terms: TermExport[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      terms.push(...flattenTerms(obj[key] as TermsFileContent, prefix ? `${prefix}.${key}` : key, namespace));
    } else {
      terms.push({
        term: prefix ? `${prefix}.${key}` : key,
        context: '',
        reference: namespace, // Set the namespace as the reference
        plural: '',
        comment: '',
        translation: obj[key] as string,
      });
    }
  }
  return terms;
};

const fetchExistingTerms = async (): Promise<string[]> => {
  try {
    const response = await axios.post(
      listTermsUrl,
      new URLSearchParams({
        api_token: apiToken,
        id: projectId,
        language: 'en',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data?.result?.terms?.map((term: { term: string }) => term.term) || [];
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error fetching existing terms:`, errorMessage);
    return [];
  }
};

const exportTerms = async (terms: TermExport[]): Promise<void> => {
  try {
    const response = await axios.post(
      addTermsUrl,
      new URLSearchParams({
        api_token: apiToken,
        id: projectId,
        data: JSON.stringify(
          terms.map(({ term, context, reference, plural, comment }) => ({
            term,
            context,
            reference,
            plural,
            comment,
          })),
        ),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (response.data.response.status === 'success') {
      logger.success(`Successfully exported terms`);
      logger.info(`New terms: `);
      terms.forEach(term => {
        logger.info(term.term);
      });
    } else {
      logger.error(`Error exporting terms:`, response.data.response.message);
    }
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error exporting terms:`, errorMessage);
  }
};

const addTranslations = async (language: string, namespace: string, terms: TermExport[]): Promise<void> => {
  try {
    const response = await axios.post(
      addTranslationsUrl,
      new URLSearchParams({
        api_token: apiToken,
        id: projectId,
        language: language,
        data: JSON.stringify(
          terms.map(({ term, context, translation }) => ({
            term,
            context,
            translation: { content: translation },
          })),
        ),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (response.data.response.status === 'success') {
      logger.success(`Successfully added translations for ${language} - ${namespace}`);
    } else {
      logger.error(`Error adding translations for ${language}:`, response.data.response.message);
    }
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error adding translations for ${language}:`, errorMessage);
  }
};

const main = async (): Promise<void> => {
  try {
    const existingTerms = await fetchExistingTerms();

    // Collect terms from each namespace file
    const allTerms: TermExport[] = [];

    for (const language of exportLanguages) {
      const dirPath = path.resolve(`./libs/i18n-utils/src/assets/locales/${language}`);
      const namespaceFiles = fs.readdirSync(dirPath).filter(file => file.endsWith('.json'));

      for (const namespaceFile of namespaceFiles) {
        const namespace = path.basename(namespaceFile, '.json');
        const filePath = path.join(dirPath, namespaceFile);
        const fileTerms = readTermsFromFile(filePath);
        const namespaceTerms = flattenTerms(fileTerms, '', namespace);
        allTerms.push(...namespaceTerms);
      }
    }

    const newTerms = allTerms.filter(term => !existingTerms.includes(term.term));

    if (newTerms.length > 0) {
      await exportTerms(newTerms);

      for (const language of exportLanguages) {
        const dirPath = path.resolve(`./libs/i18n-utils/src/assets/locales/${language}`);
        const namespaceFiles = fs.readdirSync(dirPath).filter(file => file.endsWith('.json'));

        for (const namespaceFile of namespaceFiles) {
          const namespace = path.basename(namespaceFile, '.json');
          const filePath = path.join(dirPath, namespaceFile);
          const languageTerms = readTermsFromFile(filePath);
          const newLanguageTerms = flattenTerms(languageTerms, '', namespace).filter(term =>
            newTerms.some(newTerm => newTerm.term === term.term),
          );

          if (newLanguageTerms.length > 0) {
            await addTranslations(language, namespace, newLanguageTerms);
          } else {
            logger.success(`No new translations to add for ${namespace}`);
          }
        }
      }
    } else {
      logger.success('No new terms to export');
    }
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error('Error in main process:', errorMessage);
  }
};

main();
