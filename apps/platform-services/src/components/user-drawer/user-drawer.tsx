import { Drawer } from '@mui/material';
import { DrawerContent } from './content/user-drawer-content';
import './styles.scss';

interface IProps {
  handleClose: () => void;
  isOpen: boolean;
}

export function UserDrawer({ handleClose, isOpen }: IProps) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose} ModalProps={{ keepMounted: true }}>
      <DrawerContent />
    </Drawer>
  );
}

export default UserDrawer;
