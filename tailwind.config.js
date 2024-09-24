import * as COLORS from './constants/colors.json';

function generateColorsSafelist(colors) {
  const safelist = [];
  function traverse(obj, path = []) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        traverse(obj[key], path.concat(key));
      } else {
        safelist.push(`bg-${path.concat(key).join('-')}`);
        safelist.push(`text-${path.concat(key).join('-')}`);
      }
    }
  }
  traverse(colors);
  return safelist;
}

const colorsSafelistedClasses = generateColorsSafelist(COLORS);

const sizingOptions = {
  quarter: '0.25rem', // 4px
  half: '0.5rem', // 8px
  'three-quarters': '0.75rem', // 12px
  base: '1rem', // 16px
  single: '1rem', // 16px (same as base)
  'single-large': '1.5rem', // 24px
  double: '2rem', // 32px
  'double-large': '2.5rem', // 40px
  triple: '3rem', // 48px
  'triple-large': '3.5rem', // 56px
  quadruple: '4rem', // 64px
};

export default {
  theme: {
    fontFamily: {
      sans: ['"Alaska", sans-serif'],
    },
    extend: {
      colors: COLORS,
      spacing: { ...sizingOptions },
      fontSize: { ...sizingOptions, hint: '12.25px' },
      boxShadow: {
        light: '0 3px 6px rgba(219, 224, 222, 0.65)',
        heavy: '0 1px 20px 1px rgba(51, 51, 51, 0.75)',
        menu: '0 3px 6px rgba(51, 51, 51, 0.85)',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '4px',
        modal: '8px',
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(m|p|w|h|min-w|min-h|max-w|max-h|text)-(quarter|half|base|single|single-large|double|double-large|three-quarters|triple|triple-large|quadruple|full)$/,
    },
    {
      pattern:
        /^(mx|my|mt|mr|mb|ml|px|py|pt|pr|pb|pl)-(quarter|half|base|single|single-large|double|double-large|three-quarters|triple|triple-large|quadruple|full)$/,
    },
    ...colorsSafelistedClasses,
    'text-hint',
    'shadow-light',
    'shadow-heavy',
    'shadow-menu',
  ],
  plugins: [],
};
