# i18n-utils

This library provides utilities for managing internationalization (i18n) in your project, including tools for importing, exporting, and syncing translations.

## Setup

1. Navigate to the `libs/i18n-utils` directory.
2. Create a `.env` file by copying `.env.example`:

```
  cp .env.example .env
```

3. Edit the `.env` file and replace the placeholder values with your actual POEditor credentials:

```
POEDITOR_API_TOKEN=YOUR_API_TOKEN_HERE
POEDITOR_PROJECT_ID=YOUR_PROJECT_ID_HERE
```

## Available Scripts

### Import Translations

To fetch the latest translations from POEditor and update your local files:

```shell
npm run import-translations
```

This script imports translation files into the `src/assets/locales` directory.

### Sync Translations

To extract new translation keys from your project and export them to POEditor:

```shell
npm run i18n-sync
```

This script performs two main tasks:

1. Scans your project for new translation keys using i18n-scanner.
2. Exports these keys to POEditor using the export-translations script.

## Usage

1. **Importing Translations**: Run `npm run import-translations` regularly to keep your local translations up-to-date with POEditor.

2. **Syncing Translations**: After adding new translatable strings to your code, run `npm run i18n-sync` to update POEditor with the new keys.

3. **Version Control**: The translation files are in .gitignore, since they're updated on every CI run it's not needed to versionate them.

## Best Practices

- Keep your `.env` file secure and never commit it to version control.
- Run the import script before starting work to ensure you have the latest translations.
- Run the sync script after adding new translatable content to your project.
- Coordinate with the team to avoid conflicts when updating translations.
