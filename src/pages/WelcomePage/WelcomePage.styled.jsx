import styled from 'styled-components';

import backgroundMobile from '../../assets/images/background/WelcomePage/mob/bg_mob.png';
import backgroundTablet from '../../assets/images/background/WelcomePage/tab/bg_tab.png';
import backgroundDesktop from '../../assets/images/background/WelcomePage/desktop/bg_img.png';
import backgroundBubbles from '../../assets/images/background/WelcomePage/desktop/bg_img_bubbles.png';

export const BackgroundWrapper = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;


  // мобіл
  background-image: url(${backgroundMobile});

  // табл
  @media screen and (min-width: 768px) {
    background-image: url(${backgroundTablet});
    min-height: 100vh;
  }

  // деск
  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    min-height: 100vh;
  }
`;

export const Bubble = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  min-height: calc(100vh - padding-bottom);

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
    min-height: calc(100vh - padding-bottom);

    background-image: url(${backgroundBubbles});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    padding-bottom: 109px;

    background-image: url(${backgroundBubbles});
    min-height: calc(100vh - padding-bottom);
  }
`;