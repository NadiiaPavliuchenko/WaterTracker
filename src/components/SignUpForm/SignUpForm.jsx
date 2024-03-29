import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
const SignUpForm = () => {
  let registerSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(64).required()
  })
  const initialValues = { 
    email: '',
    password: ''
  }
  const handleSubmit = () => { 
    console.log(values)
  }  

  return <>
    <Formik initialValues={ initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
      <Form>
        <label>Enter your email
          <input type="email" name="email" />
          <ErrorMessage name="email"/>
        </label>
        <label>Enter your password
          <input type="password" name="password" />
          <ErrorMessage name="password"/>
        </label>
        <label>Repeat password
          <input type="password" name="repeatPassword" />          
        </label>
        <button type="submit">Sign Up</button>

      </Form>

  </Formik>
    </>  
};

export default SignUpForm;
