import styled from 'styled-components';

export const CalendarModalStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 294px;
  bottom: 54px;
  transform: translate(50%, -50%);
  left: -15em;
  right: 1em;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.popoverShadow};
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media ${({ theme }) => theme.device.tabletMax} {
    left: ${(props) => -7 - props.$deltaNum}px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    left: -12em;
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    bottom: 56px;
    transform: none;
    left: -5em;
    bottom: 70px;
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
