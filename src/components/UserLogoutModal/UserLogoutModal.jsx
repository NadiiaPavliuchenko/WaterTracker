import { useState } from 'react';
import { ButtonContainer, ModalBox } from './UserLogoutModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { logOutAPI } from '../../store/auth/authOperations';

const UserLogoutModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  const handleLogout = () => {
    dispatch(logOutAPI());
  };
  return (
    <>
      {isOpen && (
        <ModalContainer onClose={handleClose}>
          <ModalBox>
            <div>
              <div className="topline">
                <h2>Log out</h2>
                <CloseOutlinedIcon className="close" onClick={handleClose} />
              </div>
              <p>Do you really want to leave?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleLogout}>
                Log out
              </button>
              <button className="cancel" onClick={handleClose}>
                Cancel
              </button>
            </ButtonContainer>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default UserLogoutModal;
