import ModalContainer from '../ModalContainer/ModalContainer';
import { ButtonContainer, ModalBox } from './UserLogoutModal.styled';

const UserLogoutModal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        <div>
          <h2>Log out</h2>
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
