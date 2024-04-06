import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignInForm from 'components/SignInForm/SignInForm';
import { signInAPI } from '../../store/auth/authOperations';
import { SignInPageStyle } from './SigninPage.styled';
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png';
import { useState } from 'react';
import { RecoveryModal } from '../../RecoveryModal/RecoveryModal';

const SigninPage = () => {
  const dispatch = useDispatch();
  const [openRecoveryModal, setOpenRecoveryModal] = useState(false);

  const handleOpenClick = () => {
    setOpenRecoveryModal(true);
  };

  const handleCloseClick = () => {
    setOpenRecoveryModal(false);
  };

  function handleSubmit(values) {
    dispatch(signInAPI(values));
  }

  return (
    <>
      <SignInPageStyle>
        <Wrapper>
          <div className="wrapper">
            <div className="formCont">
              <h2 className="title">Sign In</h2>
              <SignInForm submitFunc={handleSubmit} />
              <div className="link-container">
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
                <button className="link" onClick={handleOpenClick}>
                  Forgot Password
                </button>
              </div>
            </div>
            <img
              className="bottle"
              alt="bottle of water"
              src={bottleImage_mob_1x}
            ></img>
          </div>
          {openRecoveryModal && (
            <RecoveryModal
              isModalOpen={openRecoveryModal}
              closeModal={handleCloseClick}
            />
          )}
        </Wrapper>
      </SignInPageStyle>
    </>
  );
};

export default SigninPage;
