import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SignInForm from 'components/SignInForm/SignInForm';
import { signInAPI } from '../../store/auth/authOperations';
import { SignInPageStyle } from './SigninPage.styled';
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png';
import bottleImage_mob_2x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_2x.png';
import bottleImage_tab_1x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_1x.png';
import bottleImage_tab_2x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_2x.png';
import bottleImage_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png';
import bottleImage_desk_2x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png';
import { useState } from 'react';
import { RecoveryModal } from '../../components/RecoveryModal/RecoveryModal';

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
      <Wrapper>
        <SignInPageStyle>
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
            <picture className="bottle">
              <source
                srcSet={`${bottleImage_desk_1x} 1x, ${bottleImage_desk_2x} 2x`}
                media="(min-width: 1440px)"
                type="image/png"
              />
              <source
                srcSet={`${bottleImage_tab_1x} 1x, ${bottleImage_tab_2x} 2x`}
                media="(min-width: 768px)"
                type="image/png"
              />
              <source
                srcSet={`${bottleImage_mob_1x} 1x, ${bottleImage_mob_2x} 2x`}
                media="(min-width: 320px)"
                type="image/png"
              />
              <img
                className="bottle"
                alt="bottle of water"
                src={bottleImage_mob_1x}
              />
            </picture>
          </div>
          {openRecoveryModal && (
            <RecoveryModal
              isModalOpen={openRecoveryModal}
              closeModal={handleCloseClick}
            />
          )}
        </SignInPageStyle>
      </Wrapper>
    </>
  );
};

export default SigninPage;
