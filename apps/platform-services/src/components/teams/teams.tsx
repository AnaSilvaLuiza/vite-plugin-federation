import { Button, Heading, SearchField } from '@olmero/common-ui';
import { Divider } from '@mui/material';
import TeamItem from './team-item/team-item';
import UserItem from './user-item/user-item';

export default function Teams() {
  return (
    <div className="teamAdmin__teams">
      <Heading variant="h5">Teams</Heading>
      <Button.Root onClick={() => alert('Add team clicked')}>Add team</Button.Root>
      <SearchField placeholder="Search teams..." />
      <Divider />
      <UserItem />
      <TeamItem />
    </div>
  );
}
