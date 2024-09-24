import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import sharedTailwindConfig from '../../tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [sharedTailwindConfig],
};
