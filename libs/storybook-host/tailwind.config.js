import { join } from 'path';
import sharedTailwindConfig from '../../tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(__dirname, '../../apps/platform-services/src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, '../shared/common-ui/src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, '../core/src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, '../i18n-utils/src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, '../buyer/src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
  ],
  presets: [sharedTailwindConfig],
};
