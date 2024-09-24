import { Meta, StoryFn } from '@storybook/react';
import { defaultMockUser, withAuthDecorator } from '@olmero/core';
import PrivateRoute from '../private-route';

const meta: Meta<typeof PrivateRoute> = {
  component: PrivateRoute,
  title: 'Base/Pages/Private Route',
  decorators: [withAuthDecorator()],
};
export default meta;

const Template: StoryFn = (args: JSX.IntrinsicAttributes) => (
  <PrivateRoute {...args}>Private route content</PrivateRoute>
);

export const Overview = Template.bind({});
Overview.args = {};

export const Loading = Template.bind({});
Loading.decorators = [withAuthDecorator({ ...defaultMockUser, isLoading: true })];
Loading.args = {};

export const Unauthenticated = Template.bind({});
Unauthenticated.decorators = [withAuthDecorator({ ...defaultMockUser, isLoading: false, isAuthenticated: false })];
Unauthenticated.args = {};
