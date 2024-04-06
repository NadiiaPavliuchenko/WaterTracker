import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useRef, useState } from 'react';
import { LogoModalMenu, ModalMenuBtn, Icon } from './UserLogoModal.styled';
import { AnimatePresence } from 'framer-motion';
import sprite from 'src/assets/sprite.svg';

const UserLogoModal = ({ isOpen }) => {
  const modalRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (modal) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    setActiveModal(null);
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
          <ModalMenuBtn onClick={() => handleModalOpen('settings')}>
            <Icon>
              <use href={`${sprite}#settings`}></use>
            </Icon>
            Settings
          </ModalMenuBtn>
          <ModalMenuBtn onClick={() => handleModalOpen('logout')}>
            <Icon>
              <use href={`${sprite}#arrow-right-on-rectangle`}></use>
            </Icon>
            Log out
          </ModalMenuBtn>
        </LogoModalMenu>
      )}
      {activeModal === 'settings' && (
        <SettingModal onModalClose={handleModalClose} isModalOpen={true} />
      )}
      {activeModal === 'logout' && (
        <UserLogoutModal onModalClose={handleModalClose} isModalOpen={true} />
      )}
    </AnimatePresence>
  );
};

export default UserLogoModal;
