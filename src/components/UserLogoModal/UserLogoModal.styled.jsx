import styled from 'styled-components';

export const LogoModalMenu = styled.div`
  position: absolute;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  width: 130px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;
  margin-top: 2px;
  transform-origin: top;
  right: 0;
  transform: translateX(-18.5vw) translateY(3.2vw);

  // @media screen and (min-width: 1440px) and (min-width: 1920px) {
  //   transform: translateX(-18.5vw) translateY(3.2vw);
  // }

  // @media screen and (min-width: 1024px) and (min-width: 1440px) {
  //   transform: translateX(-18.5vw) translateY(3.2vw);
  // }

  // @media screen and (min-width: 760px) and (min-width: 1024px) {
  //   transform: translateX(-18.5vw) translateY(3.2vw);
  // }

  // @media screen and (min-width: 435px) and (min-width: 760px) {
  //   transform: translateX(-18.5vw) translateY(3.2vw);
  // }
  // @media screen and (min-width: 320px) and (min-width: 435px) {
  //   transform: translateX(-18.5vw) translateY(3.2vw);
  // }
`;

export const ModalMenuBtn = styled.button`
  background-color: #ffffff;
  color: #407bff;
  width: 90px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  border: none;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;

export const Icon = styled.svg`
  margin-right: 6px;
  width: 16px;
  height: 16px;
  stroke: #407bff;
  fill: #ffffff;
`;
// margin-right: 8px;
//   display: flex;
//   align-items: center;
//   svg {
//     width: 16px;
//     height: 16px;
//     fill:  #ffffff;
//     stroke: #407BFF;
