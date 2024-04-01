import ModalContainer from '../ModalContainer/ModalContainer';
import { ButtonContainer, ModalBox } from './UserLogoutModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const UserLogoutModal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        <div>
          <div className="topline">
            <h2>Log out</h2>
            <CloseOutlinedIcon className="close" />
          </div>

          <p>Do you really want to leave?</p>
        </div>
        <ButtonContainer>
          <button className="confirm">Log out</button>
          <button className="cancel">Cancel</button>
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
};

export default UserLogoutModal;
