import Wrapper from '../Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import {
  ContainerFooter,
  FrogBox,
  Icon,
  StyledLink,
  Text,
} from './Footer.styled';
import sprite from 'src/assets/sprite.svg';
import { getIsDarkTheme } from '../../store/theme/themeSelectors';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const color = useSelector(getIsDarkTheme) ? 'dark' : 'light';

  return (
    <Wrapper>
      <ContainerFooter>
        <Text>© 2024 | Developed by IT Frogs</Text>

        <Link to="/team">
          <FrogBox>
            <Icon>
              <use href={`${sprite}#frog-${color}`}></use>
            </Icon>
            <p className="wow">Meet our team</p>
          </FrogBox>
        </Link>

        <Text>Leap ahead with us!</Text>
      </ContainerFooter>
    </Wrapper>
  );
};
