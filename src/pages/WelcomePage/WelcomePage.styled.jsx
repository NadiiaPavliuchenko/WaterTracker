import styled from 'styled-components';

import backgroundMobile from '../../assets/images/background/WelcomePage/mob/bg_mob.png';
import backgroundTablet from '../../assets/images/background/WelcomePage/tab/bg_tab.png';
import backgroundDesktop from '../../assets/images/background/WelcomePage/desktop/bg_img.png';
import backgroundBubbles from '../../assets/images/background/WelcomePage/desktop/bg_img_bubbles.png';

export const BackgroundWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
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
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  // padding-bottom: 40px;
  min-height: calc(100vh - 40px);

  // табл
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    // padding-bottom: 50px;
    min-height: calc(100vh - 50px);

    background-image: url(${backgroundBubbles});
  }

  // деск
  @media screen and (min-width: 1440px) {
    padding-top: 49px;
    // padding-bottom: 109px;

    background-image: url(${backgroundBubbles});
    min-height: calc(100vh - 109px);
  }
`;

export const TurnOff = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  border-radius: 25px 25px 0 0;
  bottom: 0;
  right: 4px;
  padding: 12px;
  margin: 0;
  background-color: var(--secondary-sky-blue);
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
  font-family: 'Roboto-Bold';
  font-size: 18px;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  &:hover {
    height: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 80px;
    font-size: 20px;

    &:hover {
      height: 120px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
    height: 80px;
    font-size: 24px;
  }
`;
