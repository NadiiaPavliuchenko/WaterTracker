import styled from 'styled-components';

export const WrapperBox = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 1440px;
    padding-left: 132px;
    padding-right: 132px;
  }
`;
