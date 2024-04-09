import bg_bubbles_desk_1x from './assets/images/background/BodyBg/desktop/bg_bubbles.png';
import bg_bubbles_desk_2x from './assets/images/background/BodyBg/desktop/bg_bubbles_2x.png';
import bg_bubbles_dark_desk_1x from './assets/images/background/BodyBg/desktop/bg_bubbles_dark.png';
import bg_bubbles_dark_desk_2x from './assets/images/background/BodyBg/desktop/bg_bubbles_dark_2x.png';
import bg_bubbles_tab_1x from './assets/images/background/BodyBg/tab/bg_bubbles.png';
import bg_bubbles_tab_2x from './assets/images/background/BodyBg/tab/bg_bubbles_2x.png';
import bg_bubbles_dark_tab_1x from './assets/images/background/BodyBg/tab/bg_bubbles_dark.png';
import bg_bubbles_dark_tab_2x from './assets/images/background/BodyBg/tab/bg_bubbles_dark_2x.png';
import bg_bubbles_mob_1x from './assets/images/background/BodyBg/mob/bg_bubbles.png';
import bg_bubbles_mob_2x from './assets/images/background/BodyBg/mob/bg_bubbles_2x.png';
import bg_bubbles_dark_mob_1x from './assets/images/background/BodyBg/mob/bg_bubbles_dark.png';
import bg_bubbles_dark_mob_2x from './assets/images/background/BodyBg/mob/bg_bubbles_dark_2x.png';

import bg_desk_1x from './assets/images/background/WelcomePage/desktop/bg_img.png';
import bg_desk_2x from './assets/images/background/WelcomePage/desktop/bg_img_x2.png';
import bg_dark_desk_1x from './assets/images/background/WelcomePage/desktop/bg_img_dark.png';
import bg_dark_desk_2x from './assets/images/background/WelcomePage/desktop/bg_img_dark_x2.png';
import bg_tab_1x from './assets/images/background/WelcomePage/tab/bg_tab.png';
import bg_tab_2x from './assets/images/background/WelcomePage/tab/bg_tab_x2.png';
import bg_dark_tab_1x from './assets/images/background/WelcomePage/tab/bg_dark_tab.png';
import bg_dark_tab_2x from './assets/images/background/WelcomePage/tab/bg_dark_tab_x2.png';
import bg_mob_1x from './assets/images/background/WelcomePage/mob/bg_mob.png';
import bg_mob_2x from './assets/images/background/WelcomePage/mob/bg_mob_x2.png';
import bg_dark_mob_1x from './assets/images/background/WelcomePage/mob/bg_dark_mob.png';
import bg_dark_mob_2x from './assets/images/background/WelcomePage/mob/bg_dark_mob_x2.png';

const lightTheme = {
  colors: {
    white: '#ffffff',
    black: '#2f2f2f',
    blue: '#407bff',
    lavender: '#ecf2ff',
    skyBlue: '#9ebbff',
    paleBlue: '#d7e3ff',
    red: '#ef5050',
    orange: '#ff9d43',
    lightPurple: '#8baeff',
  },
  shadows: {
    normalButton: '0 4px 8px 0 rgba(64, 123, 255, 0.34)',
    hoverButton: '0 4px 14px 0 rgba(64, 123, 255, 0.54)',
    activeButton: 'none',
    popoverShadow: '0 4px 4px 0 rgba(64, 123, 255, 0.3)',
    calendarDayShadow: '0 2px 4px 0 rgba(64, 123, 255, 0.3)',
  },
  backgrounds: {
    bodyBubblesDesk: `-webkit-image-set(url(${bg_bubbles_desk_1x}) 1x, url(${bg_bubbles_desk_2x}) 2x)`,
    bodyBubblesTab: `-webkit-image-set(url(${bg_bubbles_tab_1x}) 1x, url(${bg_bubbles_tab_2x}) 2x)`,
    bodyBubblesMob: `-webkit-image-set(url(${bg_bubbles_mob_1x}) 1x, url(${bg_bubbles_mob_2x}) 2x)`,
    welcomeDesk: `-webkit-image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x)`,
    welcomeTab: `-webkit-image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x)`,
    welcomeMob: `-webkit-image-set(url(${bg_mob_1x}) 1x, url(${bg_mob_2x}) 2x)`,
  },
};

const darkTheme = {
  colors: {
    white: '#1C1D26',
    black: '#D5DFF5',
    blue: '#5082F2',
    lavender: '#1F2438',
    skyBlue: '#2F3875',
    paleBlue: '#2A3052',
    red: '#F16161',
    orange: '#FFA756',
    lightPurple: '#8baeff',
  },
  shadows: {
    normalButton: '0 4px 8px 0 rgba(0, 0, 0, 0.34)',
    hoverButton: '0 4px 14px 0 rgba(0, 0, 0, 0.54)',
    activeButton: 'none',
    popoverShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
    calendarDayShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },
  backgrounds: {
    bodyBubblesDesk: `-webkit-image-set(url(${bg_bubbles_dark_desk_1x}) 1x, url(${bg_bubbles_dark_desk_2x}) 2x)`,
    bodyBubblesTab: `-webkit-image-set(url(${bg_bubbles_dark_tab_1x}) 1x, url(${bg_bubbles_dark_tab_2x}) 2x)`,
    bodyBubblesMob: `-webkit-image-set(url(${bg_bubbles_dark_mob_1x}) 1x, url(${bg_bubbles_dark_mob_2x}) 2x)`,
    welcomeDesk: `-webkit-image-set(url(${bg_dark_desk_1x}) 1x, url(${bg_dark_desk_2x}) 2x)`,
    welcomeTab: `-webkit-image-set(url(${bg_dark_tab_1x}) 1x, url(${bg_dark_tab_2x}) 2x)`,
    welcomeMob: `-webkit-image-set(url(${bg_dark_mob_1x}) 1x, url(${bg_dark_mob_2x}) 2x)`,
  },
};

const defaultTheme = {
  device: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    tabletMax: '(max-width: 767px)',
    tabletAndDesktop: '(min-width: 768px) and (max-width: 1439px)',
    desktop: '(min-width: 1440px)',
  },
};

const theme = {
  light: {
    color: lightTheme.colors,
    boxShadow: lightTheme.shadows,
    backgroundImage: lightTheme.backgrounds,
    ...defaultTheme,
  },
  dark: {
    color: darkTheme.colors,
    boxShadow: darkTheme.shadows,
    backgroundImage: darkTheme.backgrounds,
    ...defaultTheme,
  },
};

export default theme;
