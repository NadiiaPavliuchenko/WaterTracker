import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { signUpAPI } from '../../store/auth/authOperations';
import { SignUpPageStyle } from './SignupPage.styled';
import { getUserEmail } from '../../store/auth/authSelectors';
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png';
import { useState } from 'react';
import { ResendCodeModal } from '../../components/ResendCodeModal/ResendCodeModal';

const SignupPage = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const [openResendModal, setOpenResendModal] = useState(false);

  const handleOpenClick = () => {
    setOpenResendModal(true);
  };

  const handleCloseClick = () => {
    setOpenResendModal(false);
  };
  function handleSubmit(values) {
    dispatch(signUpAPI(values));
  }

  return (
    <>
      <SignUpPageStyle>
        <Wrapper>
          <div className="wrapper">
            <div className="formCont">
              <h2 className="title">Sign Up</h2>
              <SignUpForm submitFunc={handleSubmit} />
              <div className="link-container">
                {/* {' '} */}
                <Link className="link" to="/signin">
                  Sign In
                </Link>
                <button className="link" onClick={handleOpenClick}>
                  Re-send code
                </button>
              </div>
            </div>
              <img
                className="bottle"
                alt="bottle of water"
                src={bottleImage_mob_1x}></img>
          </div>
          {openResendModal && (
            <ResendCodeModal
              isModalOpen={openResendModal}
              closeModal={handleCloseClick}
            />
          )}
        </Wrapper>
      </SignUpPageStyle>
      {userEmail ? <Navigate to="/signin" /> : <Navigate to="/signup" />}
    </>
  );
};

export default SignupPage;
