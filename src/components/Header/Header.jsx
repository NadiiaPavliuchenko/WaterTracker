import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ContainerHeader,
  UserAuthBtn,
  CloseIcon,
  UserName,
  UserModalIcon,
} from './Header.styled';
import sprite from 'src/assets/sprite.svg';
import Wrapper from 'components/Wrapper/Wrapper';
import imgUrl from '/src/assets/LogoSite.png';
import UserLogo from '../UserLogo/UserLogo';
import { getCurrentUser, getToken } from '../../store/auth/authSelectors';

export const Header = () => {
  const token = useSelector(getToken);
  const { name, email, avatarURL } = useSelector(getCurrentUser);

  return (
    <Wrapper>
      <ContainerHeader>
        <NavLink to={token ? '/home' : '/'} className="logoBox">
          <img src={imgUrl} alt="iconHome" />
        </NavLink>
        {!token ? (
          <UserName>
            <NavLink className="textSignIn" to="/signin" type="button">
              <UserAuthBtn>
                Sign in
                <CloseIcon>
                  <use href={`${sprite}#user`}></use>
                </CloseIcon>
                <UserModalIcon>
                  {token && <use href={`${sprite}#arrow-down`}></use>}
                </UserModalIcon>
              </UserAuthBtn>
            </NavLink>
          </UserName>
        ) : (
          <UserLogo name={name} email={email} avatarURL={avatarURL} />
        )}
      </ContainerHeader>
    </Wrapper>
  );
};

export default Header;
