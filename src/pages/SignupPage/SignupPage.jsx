import { useDispatch } from 'react-redux'
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signUpAPI} from '../../store/auth/authOperations'
import { Title, LinkTo } from './SignupPage.styled'
import Wrapper from '../../components/Wrapper/Wrapper';

const SignupPage = () => {
  const dispatch = useDispatch()
  function handleSubmit(values) {
    dispatch(signUpAPI(values))    
  }
  return (
    <>
      <Wrapper>
      <Title>Sign Up</Title>
      <SignUpForm submitFunc={handleSubmit} />
        <LinkTo to="/signin">Sign In</LinkTo>
        </Wrapper>
    </>
  );
};

export default SignupPage;
