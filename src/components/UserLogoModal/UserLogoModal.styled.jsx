import styled from 'styled-components';

export const LogoModalMenu = styled(LogoModalMenu)`
  position: absolute;
  border-radius: 10px;
  z-index: 500;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  width: 118px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-top: 2px;
  transform-origin: top;
  right: 0;
  @media screen and (min-width: 1440px) {
    margin-top: 6px;
  }
`;

export const ModalMenuBtn = styled(ModalMenuBtn)`
  background-color: #ffffff;
  color: #407bff;
  width: 86px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;
