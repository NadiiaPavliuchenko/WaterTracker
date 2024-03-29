import SignInForm from 'components/SignInForm/SignInForm';

const SigninPage = () => {
  function handleSubmit(values) {
    console.log(values)
  }
  return (
    <>
      <div>SigninPage</div>
      <SignInForm submitFunc={handleSubmit }/>
    </>
  );
};

export default SigninPage;
