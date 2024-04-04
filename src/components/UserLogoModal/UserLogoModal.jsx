import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import SettingModal from 'components/SettingModal/SettingModal';
import { useRef, useState } from 'react';
import { LogoModalMenu, ModalMenuBtn, Icon } from './UserLogoModal.styled';
import { AnimatePresence } from 'framer-motion';
import sprite from 'src/assets/sprite.svg';

const UserLogoModal = ({ isOpen }) => {
  const modalRef = useRef(null);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleSettingButtonClick = () => {
    setIsSettingModalOpen(true);
  };

  const handleLogoutButtonClick = () => {
    setIsLogoutModalOpen(true);
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
            Settings
          </ModalMenuBtn>
          <ModalMenuBtn onClick={handleLogoutButtonClick}>
            <Icon>
              <use href={`${sprite}#arrow-right-on-rectangle`}></use>
            </Icon>
            Log out
          </ModalMenuBtn>
        </LogoModalMenu>
      )}
      <SettingModal
        onModalClose={handleSettingModalClose}
        isModalOpen={isSettingModalOpen}
      />
      <UserLogoutModal
        onModalClose={handleLogoutModalClose}
        isModalOpen={isLogoutModalOpen}
      />
    </AnimatePresence>
  );
};

export default UserLogoModal;

// import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
// import SettingModal from 'components/SettingModal/SettingModal';
// import { useRef, useState } from 'react';
// import { LogoModalMenu, ModalMenuBtn, Icon } from './UserLogoModal.styled';
// import { AnimatePresence } from 'framer-motion';
// import sprite from 'src/assets/sprite.svg';

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
//             <Icon>
//               <use href={`${sprite}#settings`}></use>
//             </Icon>
//             Settings
//           </ModalMenuBtn>
//           <ModalMenuBtn onClick={handleLogoutButtonClick}>
//             <Icon>
//               <use href={`${sprite}#arrow-right-on-rectangle`}></use>
//             </Icon>
//             Log out
//           </ModalMenuBtn>
//         </LogoModalMenu>
//       )}
//       {<SettingModal onClose={(handleSettingModalClose, isSettingModalOpen)} />}
//       {
//         <UserLogoutModal
//           onClose={(handleLogoutModalClose, isLogoutModalOpen)}
//         />
//       }
//     </AnimatePresence>
//   );
// };

// export default UserLogoModal;
