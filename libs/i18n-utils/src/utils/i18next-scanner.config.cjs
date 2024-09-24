const fs = require('fs');
const chalk = require('chalk');

module.exports = {
  input: ['apps/**/*.{ts,tsx}', 'libs/**/*.{ts,tsx}', '!**/*.test.{ts,tsx}'],
  output: './',
  options: {
    debug: false,
    removeUnusedKeys: true,
    sort: true,
    lngs: ['en', 'de', 'de-CH', 'pt', 'sv'],
    ns: ['common', 'validation', 'projects_page', 'buyer', 'project_page'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: function (lng, ns, key) {
      if (lng === 'en') {
        return key;
      }
      return 'Not translated';
    },
    resource: {
      loadPath: 'libs/i18n-utils/src/assets/locales/{{lng}}/{{ns}}.json',
      savePath: 'libs/i18n-utils/src/assets/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
    },
    keySeparator: false,
    nsSeparator: false,
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser;
    let content = fs.readFileSync(file.path, enc);
    let count = 0;

    const Namespaces = {
      Common: 'common',
      Validation: 'validation',
      ProjectsPage: 'projects_page',
      ProjectPage: 'project_page',
      Buyer: 'buyer',
    };

    content = content.replace(/Namespaces\.(\w+)/g, (match, p1) => `"${Namespaces[p1]}"`);

    parser.parseFuncFromString(content, { list: ['i18next.t', 'i18n.t', 't'] }, (key, options) => {
      parser.set(key, options);
      count += 1;
    });

    if (count > 0) {
      console.log(`\n${chalk.green(count)} keys found in ${chalk.yellow(file.relative)}`);
    }

    done();
  },
};
