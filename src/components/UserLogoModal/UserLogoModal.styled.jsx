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
  transform: translateX(-24vw) translateY(2.6vw);

  @media screen and (min-width: 1440px) {
    margin-top: 6px;
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
