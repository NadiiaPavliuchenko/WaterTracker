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

  @media screen and (max-width: 1440px) {
    transform: translateX(-9vw) translateY(4vw);
  }

  @media screen and (max-width: 1024px) {
    transform: translateX(-16vw) translateY(5.7vw);
  }

  @media screen and (max-width: 768px) {
    transform: translateX(-4vw) translateY(8.2vw);
  }

  @media screen and (max-width: 425px) {
    transform: translateX(-17vw) translateY(14vw);
    width: 120px;
  }

  @media screen and (max-width: 375px) {
    transform: translateX(-12vw) translateY(16vw);
    width: 120px;
  }
  @media screen and (max-width: 320px) {
    transform: translateX(-5vw) translateY(19vw);
  }
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
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const Icon = styled.svg`
  margin-right: 6px;
  width: 16px;
  height: 16px;
  stroke: #407bff;
  fill: #ffffff;

  @media screen and (max-width: 425px) {
    font-size: 12px;
    width: 14px;
    height: 14px;
    margin-right: 9px;
  }
`;
// margin-right: 8px;
//   display: flex;
//   align-items: center;
//   svg {
//     width: 16px;
//     height: 16px;
//     fill:  #ffffff;
//     stroke: #407BFF;
