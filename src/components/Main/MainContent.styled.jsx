import styled from 'styled-components';

export const WelcomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and(min-width: 768px) {
    gap: 60px;
    align-items: stretch;
  }

  @media screen and(min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    gap: 81px;
  }
`;