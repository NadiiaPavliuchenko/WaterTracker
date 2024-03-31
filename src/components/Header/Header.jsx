// import { Logo, Auth } from 'components/Logo/Logo';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getToken, getIsDarkTheme } from '../../redux/auth/auth-Selectors';
// import { useSelector } from 'react-redux';
import {
  ContainerHeader,
  UserAuthBtn,
  CloseIcon,
  UserName,
  DarkLightThemeStyle,
} from './Header.styled';
import sprite from 'src/assets/sprite.svg';
import Wrapper from 'components/Wrapper/Wrapper';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import imgUrl from '/src/assets/LogoSite.png';

// import UserLogo from 'components/UserLogo/UserLogo';
// import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
// import { selectIsLoggedIn } from 'components/UserAuth/authSelectors';

export const Header = () => {
  // const token = useSelector(getToken); // если авторизирован то токен есть
  // const isDark = useSelector(getIsDarkTheme);

  const token = false;
  // const isDark = false;

  return (
    // <WrapHeader $isDark={isDark}>
    <Wrapper>
      <ContainerHeader>
        <NavLink to={token ? '/welcome' : '/'} className="logoBox">
          <img src={imgUrl} alt="iconHome" />
        </NavLink>
        {/* <ToggleThemeBtn /> */}
        {!token && (
          <UserName>
            <NavLink>
              <DarkLightThemeStyle>
                <LightModeIcon />
                <DarkModeIcon />
              </DarkLightThemeStyle>
            </NavLink>
            <NavLink className="textSignIn" to="/signin" type="button">
              <UserAuthBtn>
                Sign in
                <CloseIcon>
                  <use href={`${sprite}#user`}></use>
                </CloseIcon>
              </UserAuthBtn>
            </NavLink>
            {/* <img src={isDark} alt="iconHome" /> */}
          </UserName>
        )}
        {token && <UserLogoutModal />}
      </ContainerHeader>
    </Wrapper>
  );
};

export default Header;
