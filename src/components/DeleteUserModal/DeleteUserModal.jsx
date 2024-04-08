import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalContainer from '../ModalContainer/ModalContainer';
import { ButtonContainer, ModalBox } from './DeleteUserModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { deleteUserAccount } from '../../store/auth/authOperations';
import { getCurrentUser } from '../../store/auth/authSelectors';

export const DeleteUserModal = ({ onModalClose, isModalOpen }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(getCurrentUser);
  const handleLogout = (_id) => {
    dispatch(deleteUserAccount(_id));
  };
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <div>
              <div className="topline">
                <h2>Delete account</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Do you really want to delete your account?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleLogout}>
                Delete
              </button>
              <button className="cancel" onClick={onModalClose}>
                Cancel
              </button>
            </ButtonContainer>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};
