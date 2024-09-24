import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const colorsPath = path.join(__dirname, '..', 'constants', 'colors.json');
const scssPath = path.join(__dirname, '..', 'libs', 'shared', 'common-ui', 'src', 'styles', '_colors.scss');

// Read JSON data
const colorsJson = JSON.parse(fs.readFileSync(colorsPath, 'utf-8'));

// Function to convert hex to rgba
function hexToRgba(hex, alpha) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Function to convert JSON to SCSS
function convertToScss(obj, parentKey = '') {
  let scssString = '';
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    const newKey = parentKey ? `${parentKey}-${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      scssString += convertToScss(obj[key], newKey);
    } else {
      scssString += `$${newKey}: ${obj[key].toLowerCase()};\n`;
    }
  });
  return scssString;
}

// Generate RGBA variables
const rgbaVars = `
// RGBA's
$bfg-click-primary: ${hexToRgba(colorsJson.bfg.brand.primary, 0.75)};
$bfg-click-secondary: ${hexToRgba(colorsJson.bfg.brand.secondary, 0.75)};
$bfg-click-failure: ${hexToRgba(colorsJson.bfg.add.failure, 0.75)};
`;

// Generate SCSS content
const scssContent = `// Colors\n${convertToScss(colorsJson)}${rgbaVars}`;

// Write SCSS content to file
fs.writeFileSync(scssPath, scssContent.trim() + '\n');

console.log(`SCSS file generated at: ${scssPath}`);
