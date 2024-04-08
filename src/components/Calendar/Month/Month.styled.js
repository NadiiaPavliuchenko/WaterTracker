import styled from 'styled-components';
// import { baseTheme } from '../theme';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthNav = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const MonthTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  font-weight: 600;
  line-height: calc(30 / 24);

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`;

export const ArrowButton = styled.button`
  width: 14px;
  height: 14px;
  padding: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  fill: ${({ theme }) => theme.color.blue};

  & svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    fill: ${({ theme }) => theme.color.skyBlue};
    cursor: not-allowed;
  }
`;

export const Day = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${(props) =>
    props.$isOutlineVisible ? `1px solid ${props.theme.color.orange}` : 'none'};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.calendarDayShadow};
  }

  @media ${({ theme }) => theme.device.tablet} {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`;

export const MonthControl = styled.div`
  color: ${({ theme }) => theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Month = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const DayPercent = styled.span`
  color: ${({ theme }) => theme.color.skyBlue};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;

export const DaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media ${({ theme }) => theme.device.tablet} {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    column-gap: 22px;
  }
`;

export const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
