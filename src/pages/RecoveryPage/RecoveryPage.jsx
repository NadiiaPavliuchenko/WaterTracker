import { useDispatch } from 'react-redux';
import { useParams, Navigate, Link } from 'react-router-dom';
import RecoveryForm from '../../components/RecoveryForm/RecoveryForm';
import { recoverPassword } from '../../store/auth/authOperations';
import { RecoveryPageStyle } from './RecoveryPage.styled';
import Wrapper from '../../components/Wrapper/Wrapper';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png';
import bottleImage_mob_2x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_2x.png';
import bottleImage_tab_1x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_1x.png';
import bottleImage_tab_2x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_2x.png';
import bottleImage_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png';
import bottleImage_desk_2x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_2x.png';
import { useState } from 'react';

const RecoveryPage = () => {
  const { recoveryToken } = useParams();
  const [isPassword, setIsPassword] = useState(undefined);

  const dispatch = useDispatch();

  function handleSubmit(password) {
    dispatch(recoverPassword({ recoveryToken, password }));
    setIsPassword(password);
  }

  return (
    <>
      <Wrapper>
        <RecoveryPageStyle>
          <div className="wrapper">
            <div className="formCont">
              <h2 className="title">Recover Password</h2>
              <RecoveryForm submitFunc={handleSubmit} />
              <div className="link-container">
                <Link className="link" to="/signin">
                  Sign In
                </Link>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
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
        </RecoveryPageStyle>
      </Wrapper>
      {isPassword && <Navigate to="/signin" />}
    </>
  );
};

export default RecoveryPage;
