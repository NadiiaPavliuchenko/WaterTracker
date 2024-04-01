import { ButtonContainer, ModalBox } from './UserLogoutModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { logOutAPI } from '../../store/auth/authOperations';
import useModal from '../../customHooks/useModal';

const UserLogoutModal = () => {
  const { isOpen, closeModal, handleKeyDown } = useModal();

  document.addEventListener('keydown', handleKeyDown);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutAPI());
  };
  return (
    <>
      {isOpen && (
        <ModalContainer onClose={closeModal}>
          <ModalBox>
            <div>
              <div className="topline">
                <h2>Log out</h2>
                <CloseOutlinedIcon className="close" onClick={closeModal} />
              </div>
              <p>Do you really want to leave?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleLogout}>
                Log out
              </button>
              <button className="cancel" onClick={closeModal}>
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
