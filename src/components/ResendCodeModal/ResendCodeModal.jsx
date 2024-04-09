import ModalContainer from 'components/ModalContainer/ModalContainer';
import { ResendModalContainer } from './ResendCodeModal.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { reVerificateUser } from '../../store/auth/authOperations';

export const ResendCodeModal = ({ isModalOpen, closeModal }) => {
  const loginSchema = yup.object({
    email: yup.string().email().required(),
  });
  const initialValues = {
    email: '',
  };
  const dispatch = useDispatch();

  const sendMail = (email) => {
    dispatch(reVerificateUser(email));
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <ResendModalContainer>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={sendMail}
            >
              <Form className="form" autoComplete="off" noValidate>
                <label className="label" htmlFor="email">
                  Enter your mailbox to re-send verification email:
                  <br />
                  <div className="input-container">
                    <Field
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage
                    className="error"
                    name="email"
                    component="div"
                  />
                </label>
                <button type="submit">Send</button>
              </Form>
            </Formik>
          </ResendModalContainer>
        </ModalContainer>
      )}
    </>
  );
};
