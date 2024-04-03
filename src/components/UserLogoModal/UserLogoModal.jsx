import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useRef, useState } from 'react';
import { LogoModalMenu, ModalMenuBtn } from './UserLogoModal.styled';
import { AnimatePresence } from 'framer-motion';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleSettingButtonClick = () => {
    setIsSettingModalOpen(true);
    onClose && onClose();
  };

  const handleLogoutButtonClick = () => {
    setIsLogoutModalOpen(true);
    onClose && onClose();
  };

  const handleSettingModalClose = () => {
    setIsSettingModalOpen(false);
  };

  const handleLogoutModalClose = () => {
    setIsLogoutModalOpen(false);
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
      {isSettingModalOpen && <SettingModal onClose={handleSettingModalClose} />}
      {isLogoutModalOpen && (
        <UserLogoutModal onClose={handleLogoutModalClose} />
      )}
    </AnimatePresence>
  );
};

export default UserLogoModal;

// import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
// import SettingModal from 'components/SettingModal/SettingModal';
// import { useContext, useRef } from 'react';
// import { LogoModalMenu, ModalMenuBtn } from './UserLogoModal.styled';
// import { AnimatePresence } from 'framer-motion';
// import useModal from '../../customHooks/useModal';

// const UserLogoModal = ({ isOpen, onClose }) => {
//   const modalRef = useRef(null);
//   const togModal = useContext(useModal);

//   const handleSettingButtonClick = () => {
//     if (onClose && typeof onClose === 'function') {
//       togModal(<SettingModal />);
//       onClose();
//     }
//   };

//   const handleLogoutButtonClick = () => {
//     if (onClose && typeof onClose === 'function') {
//       onClose();
//       togModal(
//         <UserLogoutModal
//           onClose={() => {
//             togModal();
//           }}
//         />
//       );
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <LogoModalMenu
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           ref={modalRef}
//         >
//           <ModalMenuBtn onClick={handleSettingButtonClick}>
//             Setting
//           </ModalMenuBtn>
//           <ModalMenuBtn onClick={handleLogoutButtonClick}>Log out</ModalMenuBtn>
//         </LogoModalMenu>
//       )}
//     </AnimatePresence>
//   );
// };

// export default UserLogoModal;
