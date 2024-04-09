import React, { useState } from 'react';
import UserLogoModal from 'components/UserLogoModal/UserLogoModal';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import sprite from 'src/assets/sprite.svg';
import { ButtonBox, AvatarStile, Icon, IconStyle, ModalBox } from './UserLogo.styled';

const UserLogo = ({ name, email, avatarURL }) => {
  const [isOpenPopup, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const userName = name ? name : email;

  const handleError = () => {
    setHasError(true);
  };

  const handleClick = () => {
    setIsOpen(!isOpenPopup);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalBox>
      <ButtonBox onClick={handleClick}>
        <div>{userName}</div>

        {!hasError ? (
          <AvatarStile>
            <div>
              <IconStyle src={avatarURL} alt="avatar" onError={handleError} />
            </div>
          </AvatarStile>
        ) : (
          <Icon>
            <use href={`${sprite}#user`}></use>
          </Icon>
        )}

        <KeyboardArrowUpIcon
          style={{
            transform: isOpenPopup ? 'rotate(0deg)' : 'rotate(-180deg)',
            transition: 'transform 0.5s ease-in-out',
          }}
        />
      </ButtonBox>
      <UserLogoModal isOpen={isOpenPopup} onClose={handleClose} />
    </ModalBox>
  );
};

export default UserLogo;


