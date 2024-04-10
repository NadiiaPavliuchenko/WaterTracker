import styled from 'styled-components';

export const CalendarModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 294px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.popoverShadow};
  padding: 24px 13px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px 16px;
    width: 292px;
  }

  h3 {
    color: ${({ theme }) => theme.color.blue};
    font-size: '16px';
    line-height: calc(20 / 16);
  }
  p {
    color: ${({ theme }) => theme.color.black};
    font-size: '16px';
    line-height: calc(20 / 16);
    span {
      color: ${({ theme }) => theme.color.blue};
      font-size: '18px';
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`;
