import Wrapper from '../Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { ContainerFooter, Icon, StyledLink } from './Footer.styled';
import sprite from 'src/assets/sprite.svg';
import { getIsDarkTheme } from '../../store/theme/themeSelectors';
import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  const color = useSelector(getIsDarkTheme) ? 'dark' : 'light';

  return (
    <Wrapper>
      <ContainerFooter>
        <p>© 2024 | Developed by IT Frogs</p>

        <Link to="/team">
          <Icon>
            <use href={`${sprite}#frog-${color}`}></use>
          </Icon>
        </Link>

        {/* <Icon>
          <use href={`${sprite}#frog-${color}`}></use>
        </Icon> */}

        <StyledLink className="link" to="/team">
          Leap ahead with us!
        </StyledLink>
      </ContainerFooter>
    </Wrapper>
  );
};
