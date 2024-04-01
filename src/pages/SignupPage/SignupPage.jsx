import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Link } from "react-router-dom"

import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signUpAPI} from '../../store/auth/authOperations'
import { SignUpPageStyle } from './SignupPage.styled'
import { getUserEmail } from '../../store/auth/authSelectors'
import Wrapper from '../../components/Wrapper/Wrapper';

const SignupPage = () => {
  const dispatch = useDispatch()
  const userEmail = useSelector(getUserEmail)
  function handleSubmit(values) {
    dispatch(signUpAPI(values))    
  }
  return (
    <>
      <Wrapper>
        <SignUpPageStyle>
      <h2 className='title'>Sign Up</h2>
      <SignUpForm submitFunc={handleSubmit} />
        <Link className='link' to="/signin">Sign In</Link>
          {userEmail ? <Navigate to='/signin' /> : <Navigate to='/signup' />}
          
      </SignUpPageStyle>  
      </Wrapper>
    </>
  );
};

export default SignupPage;
