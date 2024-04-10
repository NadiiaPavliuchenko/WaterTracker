import { useEffect, useRef, useState } from 'react';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { ModalBox, ModalMenuBtn, Icon } from './UserLogoModal.styled';
import sprite from 'src/assets/sprite.svg';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (modal) => {
    setActiveModal(modal);
  };

  const handleModalClose = () => {
    onClose();
    setActiveModal(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <ModalBox>
          <div ref={modalRef}>
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
          </div>
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
