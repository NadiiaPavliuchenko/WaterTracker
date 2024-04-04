import styled from 'styled-components';

export const WelcomePageStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    align-items: stretch;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    margin-top: 80px;
    gap: 81px;
  }
`;
