import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 288px;
  z-index: -5;

  .parallax > use {
    -webkit-animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
      infinite;
    animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
    -webkit-animation-duration: 7s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(2) {
    -webkit-animation-delay: -3s;
    animation-delay: -3s;
    -webkit-animation-duration: 10s;
    animation-duration: 15s;
  }

  @-webkit-keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @keyframes moveForever {
    0% {
      -webkit-transform: translate3d(-90px, 0, 0);
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(85px, 0, 0);
      transform: translate3d(85px, 0, 0);
    }
  }

  @media screen and (min-width: 768px) {
    height: 464px;
  }

  @media screen and (min-width: 1440px) {
    height: 288px;
  }
`;
