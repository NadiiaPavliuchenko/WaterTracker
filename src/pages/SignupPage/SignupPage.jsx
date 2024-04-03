import { useDispatch, useSelector } from 'react-redux'
import {  Navigate, Link } from "react-router-dom"
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signUpAPI} from '../../store/auth/authOperations'
import { SignUpPageStyle } from './SignupPage.styled'
import { getUserEmail } from '../../store/auth/authSelectors'
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png'

const SignupPage = () => {

  const dispatch = useDispatch()
  const userEmail = useSelector(getUserEmail)
  function handleSubmit(values) {
    dispatch(signUpAPI(values))    
  }
  
  return (
    <>
      <SignUpPageStyle>
        <Wrapper >
          <div className='wrapper'>
           <div className='formCont'>
            <h2 className='title'>Sign Up</h2>
            <SignUpForm  submitFunc={handleSubmit} />
            <Link className='link' to="/signin">Sign In</Link>
            <img className="bottle" alt="bottle of water" src={ bottleImage_mob_1x }></img>          
           </div>
          </div>
        </Wrapper>
      </SignUpPageStyle>
      {userEmail ? <Navigate to='/signin' /> : <Navigate to='/signup' />}
    </>
  );
};

export default SignupPage;