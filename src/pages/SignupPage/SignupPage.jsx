import { useDispatch } from 'react-redux'
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signUpAPI} from '../../store/auth/authOperations'

const SignupPage = () => {
  const dispatch = useDispatch()
  function handleSubmit(values) {
    dispatch(signUpAPI(values))    
  }
  return (
    <>
      <div>SignupPage</div>
      <SignUpForm submitFunc={handleSubmit } />
    </>
  );
};

export default SignupPage;
