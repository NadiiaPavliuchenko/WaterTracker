import { useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { signUpAPI } from '../../store/auth/authOperations';
import { SignUpPageStyle } from './SignupPage.styled';
// import { getUserEmail } from '../../store/auth/authSelectors';
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png';
import bottleImage_mob_2x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_2x.png';
import bottleImage_tab_1x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_1x.png';
import bottleImage_tab_2x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_2x.png';
import bottleImage_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png';
import bottleImage_desk_2x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png';
import { useState } from 'react';
import { ResendCodeModal } from '../../components/ResendCodeModal/ResendCodeModal';

const SignupPage = () => {
  const dispatch = useDispatch();
  // const userEmail = useSelector(getUserEmail);
  const [openResendModal, setOpenResendModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenClick = () => {
    setOpenResendModal(true);
  };

  const handleCloseClick = () => {
    setOpenResendModal(false);
  };
  function handleSubmit(values) {
    dispatch(signUpAPI(values));
    setFormSubmitted(true);
  }

  return (
    <>
      <Wrapper>
        <SignUpPageStyle>
          <div className="wrapper">
            <div className="formCont">
              <h2 className="title">Sign Up</h2>
              <SignUpForm submitFunc={handleSubmit} />
              <div className="link-container">
                <Link className="link" to="/signin">
                  Sign In
                </Link>
                <button className="link" onClick={handleOpenClick}>
                  Resend Email
                </button>
              </div>
            </div>
            <picture className="bottle">
              <source
                srcSet={`${bottleImage_desk_1x} 1x, ${bottleImage_desk_2x} 2x`}
                media="(min-width: 1440px)"
                width="865"
                height="680"
                type="image/png"
              />
              <source
                srcSet={`${bottleImage_tab_1x} 1x, ${bottleImage_tab_2x} 2x`}
                media="(min-width: 768px)"
                width="656"
                height="548"
                type="image/png"
              />
              <source
                srcSet={`${bottleImage_mob_1x} 1x, ${bottleImage_mob_2x} 2x`}
                media="(min-width: 320px)"
                width="280"
                height="210"
                type="image/png"
              />
              <img
                className="bottle"
                alt="bottle of water"
                src={bottleImage_mob_1x}
              />
            </picture>
          </div>
          {openResendModal && (
            <ResendCodeModal
              isModalOpen={openResendModal}
              closeModal={handleCloseClick}
            />
          )}
        </SignUpPageStyle>
      </Wrapper>
      {formSubmitted && <Navigate to="/signin" />}
    </>
  );
};

export default SignupPage;
