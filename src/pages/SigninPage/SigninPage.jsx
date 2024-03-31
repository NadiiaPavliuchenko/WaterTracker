import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import SignInForm from 'components/SignInForm/SignInForm';
import { signInAPI } from '../../store/auth/authOperations'
import { getUserEmail } from '../../store/auth/authSelectors'
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
      <div>SigninPage</div>
      <SignInForm submitFunc={handleSubmit} />
      {userEmail? <Navigate to='/home' />:<Navigate to='/signin' /> }
      
    </>
  );
};

export default SigninPage;
