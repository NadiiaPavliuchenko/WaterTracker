import ModalContainer from 'components/ModalContainer/ModalContainer';
import { sendRecoveryEmail } from '../../store/auth/authOperations';
import { useDispatch } from 'react-redux';
import { RecoveryModalContainer } from './RecoveryModal.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

export const RecoveryModal = ({ isModalOpen, closeModal }) => {
  const loginSchema = yup.object({
    email: yup.string().email().required(),
  });
  const initialValues = {
    email: '',
  };
  const dispatch = useDispatch();

  const sendMail = (email) => {
    dispatch(sendRecoveryEmail(email));
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <RecoveryModalContainer>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={sendMail}
            >
              <Form className="form" autoComplete="off" noValidate>
                <label className="label" htmlFor="email">
                  Enter your registered mail:
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
          </RecoveryModalContainer>
        </ModalContainer>
      )}
    </>
  );
};
