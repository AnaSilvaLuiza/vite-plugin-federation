import type { Meta } from '@storybook/react';
import { UserDrawer } from '../user-drawer';
import { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import Logo from '../../../assets/user-avatar.jpeg';

const meta: Meta<typeof UserDrawer> = {
  component: UserDrawer,
  title: 'Application/Components/UserDrawer',
};

const Template = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <IconButton onClick={() => setIsOpen(true)}>
        <Avatar alt="User avatar" src={Logo} />
      </IconButton>
      <UserDrawer isOpen={open} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default meta;

export const Overview = Template.bind({});
