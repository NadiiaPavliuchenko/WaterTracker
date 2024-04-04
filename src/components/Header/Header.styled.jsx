import styled from '@emotion/styled';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`;

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
`;

export const DarkLightThemeStyle = styled.div`
  margin-right: 0%;
`;

export const CloseIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: rgb(47, 47, 47);
  fill: transparent;
`;

export const UserModalIcon = styled.svg`
  width: 16px;
  height: 16px;
  transition:
    transform 0.5s ease,
    fill 0.5s ease;

  &:hover,
  &:focus {
    fill: blue;
    /*transform: scale(1.2);  Збільшення розміру при натисканні */
  }

  &.active {
    fill: red;
    transform: rotate(180deg);
  }
`;

export const UserName = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 320px) {
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const UserAuthBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  background-color: transparent;
  padding: 0px;
  color: rgb(64, 123, 255);
  border: 0px;
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    transition: transform 0.5s ease 0s;
  }

  @media (min-width: 320px) {
    font-size: 16px;
    line-height: 1.25em;
  }

  &:hover,
  &:focus {
    color: rgb(255, 157, 67);
  }
`;
// export const Container = styled.div`
//   margin: 0 auto;
//   padding-right: 20px;
//   padding-left: 20px;

//   @media (min-width: 320px) {
//     font-size: 16px;
//     line-height: 1.25em;
//   }

/* @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 120px;
    padding-left: 120px;
  } */
