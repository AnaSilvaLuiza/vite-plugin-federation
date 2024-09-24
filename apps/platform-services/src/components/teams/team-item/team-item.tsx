import { StarOutline } from '@mui/icons-material';
import { getTeams } from '../../../pages/team-admin/utils/utils';
import { ITeam } from '../../../pages/team-admin/types/types';

import { Avatar, Chip } from '@mui/material';
const teams: ITeam[] = getTeams();

export default function TeamItem() {
  return (
    <>
      {teams.map((team, index) => {
        const { avatar, name, membersCount, isEnterprise } = team;
        return (
          <div key={index} className="teamAdmin__teamItem">
            <Avatar alt={name} src={avatar} />
            <div className="teamAdmin__teamInfo">
              <p>{name}</p>
              <p>{membersCount} members</p>
            </div>
            <Chip
              size="small"
              icon={isEnterprise ? <StarOutline /> : undefined}
              label={isEnterprise ? 'Enterprise' : 'Free'}
              className={isEnterprise ? 'teamAdmin__chipEnterprise' : 'teamAdmin__chipFree'}
            />
          </div>
        );
      })}
    </>
  );
}
