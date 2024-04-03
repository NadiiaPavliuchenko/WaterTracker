import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useContext, useRef } from 'react';
import { LogoModalMenu, ModalMenuBtn } from './UserLogoModal.styled';
import { AnimatePresence } from 'framer-motion';
import useModal from '../../customHooks/useModal';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const togModal = useContext(useModal);

  const handleSettingButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      togModal(<SettingModal />);
      onClose();
    }
  };

  const handleLogoutButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
      togModal(
        <UserLogoutModal
          onClose={() => {
            togModal();
          }}
        />
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <LogoModalMenu
          initial="initial"
          animate="animate"
          exit="exit"
          ref={modalRef}
        >
          <ModalMenuBtn onClick={handleSettingButtonClick}>
            Setting
          </ModalMenuBtn>
          <ModalMenuBtn onClick={handleLogoutButtonClick}>Log out</ModalMenuBtn>
        </LogoModalMenu>
      )}
    </AnimatePresence>
  );
};

export default UserLogoModal;
