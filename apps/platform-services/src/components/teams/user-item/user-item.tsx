import { Avatar } from '@mui/material';

export default function UserItem() {
  const usersCount: number = 5;

  return (
    <div className="teamAdmin__userItem">
      <Avatar />
      <div className={'teamAdmin__userInfo'}>
        <p>All Users</p>
        <p>{usersCount} members</p>
      </div>
    </div>
  );
}
