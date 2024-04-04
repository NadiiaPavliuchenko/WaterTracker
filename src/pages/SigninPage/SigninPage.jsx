import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import SignInForm from 'components/SignInForm/SignInForm';
import { signInAPI } from '../../store/auth/authOperations'
import { SignInPageStyle } from "./SigninPage.styled"
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png'


const SigninPage = () => {

  const dispatch = useDispatch()  

  function handleSubmit(values) {
    dispatch(signInAPI(values))    
  }
 
  return (
    <>
      <SignInPageStyle>
        <Wrapper>
          <div className='wrapper'>
           <div className='formCont'>
            <h2 className='title'>SigninPage</h2>
             <SignInForm submitFunc={handleSubmit} />
             <Link className='link' to="/signup">Sign Up</Link>
            </div> 
            <img className="bottle" alt="bottle of water" src={ bottleImage_mob_1x }></img>  
          </div>
        </Wrapper>
      </SignInPageStyle>
    </>
  );
};

export default SigninPage;
