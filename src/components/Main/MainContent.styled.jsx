import styled from 'styled-components';

export const WelcomePageStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 60px;
    align-items: stretch;
    margin-top: 40px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    height: 582px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    margin-top: 80px;
    gap: 81px;
  }
`;
