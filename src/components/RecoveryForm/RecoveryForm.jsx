import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RecoveryFormStyles } from './RecoveryForm.styled';
import sprite from '../../assets/sprite.svg';

const SignUpForm = ({ submitFunc }) => {
  const registerSchema = yup.object({
    password: yup.string().min(6).max(64).required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const initialValues = {
    password: '',
    repeatPassword: '',
  };

  function handleSubmit(values, actions) {
    submitFunc(values.password);
    actions.resetForm();
  }

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

  return (
    <>
      <RecoveryFormStyles>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form" autoComplete="off">
            <label className="label" htmlFor="password">
              Enter your password
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
              <ErrorMessage className="error" name="password" component="div" />
            </label>
            <br />

            <label className="label" htmlFor="repeatPassword">
              Repeat password
              <div className="input-container">
                <Field
                  className="input"
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat password"
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
                name="repeatPassword"
                component="div"
              />
            </label>
            <br />

            <button className="buttonSignUp" type="submit">
              Save
            </button>
          </Form>
        </Formik>
      </RecoveryFormStyles>
    </>
  );
};

export default SignUpForm;
