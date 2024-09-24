import { Meta } from '@storybook/react';
import DefaultTranslationExporter from '../default-translation-exporter';

const meta: Meta<typeof DefaultTranslationExporter> = {
  component: DefaultTranslationExporter,
  title: 'Internationalization/Components/Default Translations',
};
export default meta;

export const Overview = () => {
  return <DefaultTranslationExporter />;
};
