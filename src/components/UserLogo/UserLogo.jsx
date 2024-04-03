import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import sprite from 'src/assets/sprite.svg';
import { ButtonBox, Icon } from './UserLogo.styled';

const UserLogo = ({ name, email, avatarUrl }) => {
  const [isOpenPopup, setIsOpen] = useState(false);
  const userName = name ? name : email;

  const handleClick = () => {
    setIsOpen(!isOpenPopup);
  };
  return (
    <>
      <ButtonBox onClick={handleClick}>
        <div>{userName}</div>
        <div>
          {avatarUrl ? (
            <img src={avatarUrl} alt="avatar" />
          ) : (
            <Icon>
              <use href={`${sprite}#user`}></use>
            </Icon>
          )}
        </div>
        {isOpenPopup ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        {/* {isOpenPopup && <UserLogoModal />} */}
      </ButtonBox>
      {isOpenPopup && (
        <UserLogoModal isOpen={isOpenPopup} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default UserLogo;

// import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { useState } from 'react';
// import sprite from 'src/assets/sprite.svg';
// import { ButtonBox, Icon } from './UserLogo.styled';

// const UserLogo = ({ name, email, avatarUrl }) => {
//   const [isOpenPopup, setIsOpen] = useState(false);
//   const userName = name ? name : email;

//   const handleClick = () => {
//     setIsOpen(!isOpenPopup);
//   };
//   return (
//     <>
//       <ButtonBox onClick={handleClick}>
//         <div>{userName}</div>
//         <div>
//           {avatarUrl ? (
//             <img src={avatarUrl} alt="avatar" />
//           ) : (
//             <Icon>
//               <use href={`${sprite}#user`}></use>
//             </Icon>
//           )}
//         </div>
//         {isOpenPopup ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//         {isOpenPopup && <UserLogoModal />}
//       </ButtonBox>
//     </>
//   );
// };

// export default UserLogo;
