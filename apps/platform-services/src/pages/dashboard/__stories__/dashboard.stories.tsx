import type { Meta } from '@storybook/react';
import { Dashboard } from '../dashboard';

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
  title: 'Base/Pages/Dashboard',
};
export default meta;

export const Overview = () => {
  return <Dashboard />;
};
