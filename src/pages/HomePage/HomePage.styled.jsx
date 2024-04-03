import styled from 'styled-components';

import backgroundBubbles from '../../assets/images/background/WelcomePage/desktop/bg_img_bubbles.png';
import bottle from '../../assets/images/background/WelcomePage/desktop/bottle_home_screen.png';



export const HomeSection = styled.div`
  background-image: url(${backgroundBubbles}); 
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex-direction: row;
  }
`;

export const BottleSection = styled.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const HomeStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex: 1;
  }
`;


