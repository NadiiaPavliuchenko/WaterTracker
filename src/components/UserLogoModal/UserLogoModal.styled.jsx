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
  /* margin-top: 2px; */
  /* transform-origin: top; */
  right: 235px;
  top: 50px;

  @media ${({ theme }) => theme.device.mobile} {
    right: 8px;
 
  }

  @media ${({ theme }) => theme.device.tablet} {
    right: 15px;
   } 

  @media screen and (min-width: 425px) {
    right: 20px;
}

 @media screen and (min-width: 1024px) {
    right: 110px;
} 

  /* @media ${({ theme }) => theme.device.tabletMax} {
    right: 50px;

  } */

  @media ${({ theme }) => theme.device.desktop} {
    right: 85px; 
  
  }

  @media screen and (min-width: 1440px) {
    right: 240px;
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

