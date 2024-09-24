import { faHandsWash } from '@fortawesome/free-solid-svg-icons';
import { Avatar, IconButton } from '@mui/material';
import { Title } from '@olmero/common-ui';
import { getHours } from 'date-fns';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/user-avatar.jpeg';
import UserDrawer from '../../components/user-drawer/user-drawer';

export function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { t } = useTranslation();
  const hour = getHours(new Date());

  const title = useMemo(() => {
    if (hour >= 5 && hour < 12) {
      return t('good_morning');
    }
    if (hour >= 12 && hour < 18) {
      return t('good_afternoon');
    }
    return t('good_evening');
  }, [hour, t]);

  return (
    <>
      <UserDrawer isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <Title title={title} icon={faHandsWash}>
        <IconButton onClick={() => setIsOpen(true)}>
          <Avatar alt="User avatar" src={Logo} />
        </IconButton>
      </Title>
    </>
  );
}

export default Dashboard;
