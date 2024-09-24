import { Meta, StoryFn } from '@storybook/react';
import LanguagesDropdown, { LanguagesDropdownProps } from '../languages-dropdown';
import { useTranslation } from 'react-i18next';
import { Namespaces } from '@platform-services-ui/i18n-utils';
import { logger } from '@olmero/core';

const meta: Meta<typeof LanguagesDropdown> = {
  component: LanguagesDropdown,
  title: 'Internationalization/Components/Languages Dropdown',
};
export default meta;

const Template: StoryFn<LanguagesDropdownProps> = (args: JSX.IntrinsicAttributes & LanguagesDropdownProps) => (
  <LanguagesDropdown {...args} />
);

export const Overview = Template.bind({});

export const Example = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    logger.info('Language changed: ', language.toLowerCase());
  };

  return (
    <div className="flex flex-col gap-single">
      <LanguagesDropdown onChange={handleLanguageChange} />
      <span>
        {t('example-label', { ns: Namespaces.Common })} {t('test')}
      </span>
    </div>
  );
};
