import styled from 'styled-components';

export const ModalBox = styled.div`
  position: absolute;
  border-radius: 10px;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.boxShadow.popoverShadow};

  width: 130px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;

  @media ${({ theme }) => theme.device.mobile} {
    top: 30px;
    right: 0;
  }
`;

export const ModalMenuBtn = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.blue};
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
    color: ${({ theme }) => theme.color.orange};
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
  stroke: ${({ theme }) => theme.color.blue};
  fill: transparent;

  @media screen and (max-width: 425px) {
    font-size: 12px;
    width: 14px;
    height: 14px;
    margin-right: 9px;
  }
`;

