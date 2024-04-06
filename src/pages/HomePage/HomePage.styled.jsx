import styled from 'styled-components';

import backgroundBubbles from '../../assets/images/background/WelcomePage/desktop/bg_img_bubbles.png';
import bottle from '../../assets/images/background/WelcomePage/desktop/bottle_home_screen.png';

export const HomeSection = styled.div`
  background-image: url(${backgroundBubbles});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const BottleSection = styled.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

export const HomeStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
