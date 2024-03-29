import { useDispatch } from 'react-redux'
import SignUpForm from 'components/SignUpForm/SignUpForm';

const SignupPage = () => {
  const dispatch = useDispatch()
  function handleSubmit(values) {
    dispatch(signUpThunk(values))
    console.log(values)
  }
  return (
    <>
      <div>SignupPage</div>
      <SignUpForm submitFunc={handleSubmit } />
    </>
  );
};

export default SignupPage;
