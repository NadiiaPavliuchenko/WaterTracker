import styled from 'styled-components';

import backgroundBubbles from '../../assets/images/background/WelcomePage/desktop/bg_img_bubbles.png';
import bottle from '../../assets/images/background/WelcomePage/desktop/bottle_home_screen.png';

export const WrapperBox = styled.div`

background-color: #fff;
  background-image: url(${backgroundBubbles});
  background-repeat: no-repeat;
  background-size: cover;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const HomeSection = styled.div`
 display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const HomeStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;


