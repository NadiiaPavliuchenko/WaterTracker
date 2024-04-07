import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`;

export const UserLogo = styled.div`
  cursor: pointer;

  &:hover,
  &:focus {
    cursor: pointer;
  }
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
  stroke: ${({ theme }) => theme.color.black};
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
    fill: ${({ theme }) => theme.color.blue};
    /*transform: scale(1.2);  Збільшення розміру при натисканні */
  }

  &.active {
    fill: ${({ theme }) => theme.color.red};
    transform: rotate(180deg);
  }
`;

export const UserName = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    gap: 10px;
  }

  @media ${({ theme }) => theme.device.tablet} {
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
  color: ${({ theme }) => theme.color.blue};
  border: 0px solid transparent;
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    transition: transform 0.5s ease 0s;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
    line-height: 1.25em;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.orange};
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
