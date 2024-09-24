import axios from 'axios';
import { Term } from '@platform-services-ui/i18n-utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { logger } from '../../../shared/core/src/utils/logger';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const apiToken: string = process.env.POEDITOR_API_TOKEN || '';
const projectId: string = process.env.POEDITOR_PROJECT_ID || '';
const baseUrl = 'https://api.poeditor.com/v2/terms/list';

export const fetchTerms = async (language: string): Promise<Term[]> => {
  try {
    const response = await axios.post(
      baseUrl,
      new URLSearchParams({
        api_token: apiToken,
        id: projectId,
        language: language.toLowerCase(),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data?.result?.terms || [];
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    logger.error(`Error fetching terms for language ${language}:`, errorMessage);
    return [];
  }
};
