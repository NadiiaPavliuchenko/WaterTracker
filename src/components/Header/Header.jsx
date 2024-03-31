// import { Logo, Auth } from 'components/Logo/Logo';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getToken, getIsDarkTheme } from '../../redux/auth/auth-Selectors';
// import { useSelector } from 'react-redux';
import { ContainerHeader, CloseIcon } from './Header.styled';
import sprite from 'src/assets/sprite.svg';
import Wrapper from 'components/Wrapper/Wrapper';
// import UserLogo from 'components/UserLogo/UserLogo';
// import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
// import { selectIsLoggedIn } from 'components/UserAuth/authSelectors';

export const Header = () => {
  // const token = useSelector(getToken); // если авторизирован то токен есть
  // const isDark = useSelector(getIsDarkTheme);

  const token = true;
  const isDark = false;

  return (
    // <WrapHeader $isDark={isDark}>
    <Wrapper>
      <ContainerHeader>
        <div>
          <NavLink to={token ? '/main' : '/'} className="logoBox">
            <div>
              <img src="/src/assets/LogoSite.png" alt="iconHome" />
            </div>
            <div className="logoText">TRACKER of Water</div>
          </NavLink>
          {/* <ToggleThemeBtn /> */}
          {!token && (
            <div>
              <NavLink className="textSignIn" to="login">
                Sign in
                <CloseIcon>
                  <use href={`${sprite}#user`}></use>
                </CloseIcon>
              </NavLink>
              <div>
                <img src={isDark} alt="iconHome" />
              </div>
            </div>
          )}

          {token && <UserLogoutModal />}
        </div>
      </ContainerHeader>
    </Wrapper>
  );
};

export default Header;
