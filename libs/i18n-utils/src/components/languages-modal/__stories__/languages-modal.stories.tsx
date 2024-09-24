import { Meta, StoryFn } from '@storybook/react';
import LanguagesModal, { LanguagesModalProps } from '../languages-modal';

const meta: Meta<typeof LanguagesModal> = {
  component: LanguagesModal,
  title: 'Internationalization/Components/Languages Dialog',
};
export default meta;

const Template: StoryFn<LanguagesModalProps> = (args: JSX.IntrinsicAttributes & LanguagesModalProps) => (
  <LanguagesModal {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
