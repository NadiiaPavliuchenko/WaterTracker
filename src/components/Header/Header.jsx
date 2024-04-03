// import { Logo, Auth } from 'components/Logo/Logo';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getToken, getIsDarkTheme } from '../../redux/auth/auth-Selectors';
import { useSelector } from 'react-redux';
import {
  ContainerHeader,
  UserAuthBtn,
  CloseIcon,
  UserName,
  // DarkLightThemeStyle,
} from './Header.styled';
import sprite from 'src/assets/sprite.svg';
import Wrapper from 'components/Wrapper/Wrapper';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import imgUrl from '/src/assets/LogoSite.png';
import iconDown from '/src/assets/icons8-down-24.png';

import UserLogo from '../UserLogo/UserLogo';
// import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
// import UserLogoutModal from 'components/UserLogoutModal/UserLogoutModal';
import { getCurrentUser, getToken } from '../../store/auth/authSelectors';

export const Header = () => {
  const token = useSelector(getToken);
  const { name, email, avatarUrl } = useSelector(getCurrentUser);

  // const token = false;
  // const isDark = false;

  return (
    <Wrapper>
      <ContainerHeader>
        <NavLink to={token ? '/home' : '/'} className="logoBox">
          <img src={imgUrl} alt="iconHome" />
        </NavLink>
        {/* <ToggleThemeBtn /> */}
        {!token ? (
          <UserName>
            {/* <NavLink>
              <DarkLightThemeStyle>
                <LightModeIcon />
                <DarkModeIcon />
              </DarkLightThemeStyle>
            </NavLink> */}
            <NavLink className="textSignIn" to="/signin" type="button">
              <UserAuthBtn>
                Sign in
                <CloseIcon>
                  <use href={`${sprite}#user`}></use>
                </CloseIcon>
                <img src={iconDown} alt="iconDown" />
              </UserAuthBtn>
            </NavLink>
            {/* <img src={isDark} alt="iconHome" /> */}
          </UserName>
        ) : (
          <UserLogo name={name} email={email} avatarUrl={avatarUrl} />
        )}
      </ContainerHeader>
    </Wrapper>
  );
};

export default Header;
