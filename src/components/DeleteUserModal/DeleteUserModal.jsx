import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalContainer from '../ModalContainer/ModalContainer';
import { ButtonContainer, ModalBox } from './DeleteUserModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { deleteUserAccount } from '../../store/auth/authOperations';
import { getCurrentUser } from '../../store/auth/authSelectors';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import sprite from '../../assets/sprite.svg';

export const DeleteUserModal = ({ onModalClose, isModalOpen }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(getCurrentUser);
  const passwordSchema = yup.object({
    password: yup.string().min(6).max(64).required(),
  });
  const initialPassword = {
    password: '',
  };

  function watchPassFunc(evt) {
    const evtTarget = evt.target.closest('.watchPasswordIcon').previousSibling;
    if (evtTarget.type === 'password') {
      evtTarget.type = 'text';
      evt.target.closest('SVG').firstChild.href.baseVal =
        sprite + '#eye-opened';
      return;
    }
    if (evtTarget.type === 'text') {
      evtTarget.type = 'password';
      evt.target.closest('SVG').firstChild.href.baseVal =
        sprite + '#eye-closed';
      return;
    }
  }
  const handleSubmit = (id, password) => {
    dispatch(deleteUserAccount(id, password));
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
              <p>
                Do you really want to delete your account?
                <br />
                All your data will be lost!
              </p>
            </div>
            <Formik
              initialValues={initialPassword}
              validationSchema={passwordSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form" autoComplete="off">
                <label className="label" htmlFor="password">
                  Enter your password to confirm
                  <div className="input-container">
                    <Field
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <svg
                      className="watchPasswordIcon"
                      onClick={watchPassFunc}
                      width="16"
                      height="14"
                      stroke="#9ebbff"
                      fill="none"
                    >
                      <use href={sprite + '#eye-closed'}></use>
                    </svg>
                  </div>
                  <ErrorMessage
                    className="error"
                    name="password"
                    component="div"
                  />
                </label>
                <ButtonContainer>
                  <button className="confirm" type="submit">
                    Delete
                  </button>
                  <button className="cancel" onClick={onModalClose}>
                    Cancel
                  </button>
                </ButtonContainer>
              </Form>
            </Formik>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};
