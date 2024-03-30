import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"
const SignUpForm = ({ submitFunc}) => {
  const registerSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(64).required(),
    repeatPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match') 
  })
  const initialValues = { 
    email: '',
    password: '',
    repeatPassword: ''
  } 
  function handleSubmit(values, actions) {   
    submitFunc(values)       
    actions.resetForm()
  }  
  function watchPassFunc(evt) {     
    if (evt.target.previousSibling.type === "password") {
      evt.target.previousSibling.type = "text"      
      return
    }
    if (evt.target.previousSibling.type === "text") {
      evt.target.previousSibling.type = "password"     
      return
     }
  }

  return <>
    <Formik initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">Enter your email
          <Field type="text" name="email" />
          <ErrorMessage name="email" component='div'/>
        </label>
        <br/>
        <label htmlFor="password">
          Enter your password
          <Field type="password" name="password" />
          <span onClick={watchPassFunc}>W</span>
          <ErrorMessage name="password" component='div'/>
        </label>
        <br/>
        <label htmlFor="repeatPassword">
          Repeat password
          <Field type="password" name="repeatPassword" />
          <span onClick={watchPassFunc}>W</span>
          <ErrorMessage name="repeatPassword" component='div' />          
        </label>
        <br/>
        <button type="submit">Sign Up</button>

      </Form>

    </Formik>
    <Link to="/signin">Sign In</Link>
    </>  
};

export default SignUpForm;
