import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import SignInForm from 'components/SignInForm/SignInForm';
import { signInAPI } from '../../store/auth/authOperations'
import { getUserEmail } from '../../store/auth/authSelectors'
import { Link } from "react-router-dom"
import Wrapper from '../../components/Wrapper/Wrapper';
const SigninPage = () => {
  const dispatch = useDispatch()
  const userEmail = useSelector(getUserEmail)
  function handleSubmit(values) {
    dispatch(signInAPI(values))
    console.log(userEmail)
  }
  console.log(userEmail)
  return (
    <>
      <Wrapper>
      <div>SigninPage</div>
        <SignInForm submitFunc={handleSubmit} />
        <Link to="/signup">Sign Up</Link>     
      </Wrapper>
    </>
  );
};

export default SigninPage;
