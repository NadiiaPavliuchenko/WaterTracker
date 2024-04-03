// import { useRef, useState } from 'react';
// import { LogoModalMenu, ModalMenuBtn } from './UserLogoModal.styled';
// import { AnimatePresence } from 'framer-motion';
// import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
// import SettingModal from '../SettingModal/SettingModal';

// const UserLogoModal = ({ isOpen, onClose }) => {
//   const modalRef = useRef(null);
//   const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

//   const handleSettingButtonClick = () => {
//     setIsSettingModalOpen(true);
//     onClose && onClose();
//   };

//   const handleLogoutButtonClick = () => {
//     setIsLogoutModalOpen(true);
//     onClose && onClose();
//   };

//   const handleSettingModalClose = () => {
//     setIsSettingModalOpen(false);
//   };

//   const handleLogoutModalClose = () => {
//     setIsLogoutModalOpen(false);
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
//       {isSettingModalOpen && (
//         <SettingModal
//           onClose={handleSettingModalClose}
//           onNavigate={() => setIsSettingModalOpen(false)} // Закриваємо модальне вікно SettingModal
//         />
//       )}
//       {isLogoutModalOpen && (
//         <UserLogoutModal
//           onClose={handleLogoutModalClose}
//           onNavigate={() => setIsLogoutModalOpen(false)} // Закриваємо модальне вікно UserLogoutModal
//         />
//       )}
//     </AnimatePresence>
//   );
// };

// export default UserLogoModal;

import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useRef, useState } from 'react';
import { LogoModalMenu, ModalMenuBtn, Icon } from './UserLogoModal.styled';
import { AnimatePresence } from 'framer-motion';
import sprite from 'src/assets/sprite.svg';

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
            <Icon>
              <use href={`${sprite}#settings`}></use>
            </Icon>
            Setting
          </ModalMenuBtn>
          <ModalMenuBtn onClick={handleLogoutButtonClick}>
            <Icon>
              <use href={`${sprite}#arrow-right-on-rectangle`}></use>
            </Icon>
            Log out
          </ModalMenuBtn>
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
