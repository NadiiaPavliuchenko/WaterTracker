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
    top: 50px;
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

// import styled from 'styled-components';

// export const ModalBox = styled.div`
//   position: absolute;
//   border-radius: 10px;
//   z-index: 1;
//   box-shadow: ${({ theme }) => theme.boxShadow.popoverShadow};

//   width: 130px;
//   background-color: ${({ theme }) => theme.color.white};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 18px;
//   margin-top: 2px;
//   transform-origin: top;
//   right: 0;

//   /* transform: translateX(-18.5vw) translateY(3.2vw); */
//   transform: translateX(-27vw) translateY(2.5vw);

//   @media screen and (max-width: 1920px) {
//     transform: translateX(-16vw) translateY(3.8vw);
//   }

//   @media screen and (max-width: 1440px) {
//     transform: translateX(-9vw) translateY(4.2vw);
//   }

//   @media screen and (max-width: 1024px) {
//     transform: translateX(-16vw) translateY(6vw);
//   }

//   @media screen and (max-width: 768px) {
//     transform: translateX(-4vw) translateY(8.2vw);
//   }

//   @media screen and (max-width: 425px) {
//     transform: translateX(-17vw) translateY(14.2vw);
//     width: 120px;
//   }

//   @media screen and (max-width: 375px) {
//     transform: translateX(-12vw) translateY(16vw);
//     width: 120px;
//   }
//   @media screen and (max-width: 320px) {
//     transform: translateX(-5vw) translateY(19vw);
//   }
// `;

// export const ModalMenuBtn = styled.button`
//   background-color: ${({ theme }) => theme.color.white};
//   color: ${({ theme }) => theme.color.blue};
//   width: 90px;
//   height: 22px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   font-size: 16px;
//   border: none;
//   &:not(:last-child) {
//     margin-bottom: 16px;
//   }
//   &:hover {
//     color: ${({ theme }) => theme.color.orange};
//     transition: color 0.3s ease;
//   }
//   @media screen and (max-width: 425px) {
//     font-size: 14px;
//   }
//   @media screen and (max-width: 375px) {
//     font-size: 14px;
//   }
// `;

// export const Icon = styled.svg`
//   margin-right: 6px;
//   width: 16px;
//   height: 16px;
//   stroke: ${({ theme }) => theme.color.blue};
//   fill: transparent;

//   @media screen and (max-width: 425px) {
//     font-size: 12px;
//     width: 14px;
//     height: 14px;
//     margin-right: 9px;
//   }
// `;
