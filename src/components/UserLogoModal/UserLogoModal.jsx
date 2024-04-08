import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useRef, useState } from 'react';
import { ModalBox, ModalMenuBtn, Icon } from './UserLogoModal.styled';
import sprite from 'src/assets/sprite.svg';
// import ModalContainer from '../ModalContainer/ModalContainer';

const UserLogoModal = ({ isOpen }) => {
  // const modalRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (modal) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  return (
    <>
      {isOpen && (
        <ModalBox>
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
        </ModalBox>
      )}
      {activeModal === 'settings' && (
        <SettingModal onModalClose={handleModalClose} isModalOpen={true} />
      )}
      {activeModal === 'logout' && (
        <UserLogoutModal onModalClose={handleModalClose} isModalOpen={true} />
      )}
    </>
  );
};

export default UserLogoModal;



