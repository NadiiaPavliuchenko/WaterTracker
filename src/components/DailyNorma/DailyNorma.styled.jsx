import styled from 'styled-components';

export const DailySection = styled.div`
  position: relative;
`;

export const ModalDaily = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  height: 74px;
  width: 150px;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.lavender};
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 16px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 30px;
  }
`;

export const DailyTitle = styled.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`;

export const DailyBtn = styled.button`
  display: block;
  padding: 0;
  color: ${({ theme }) => theme.color.lightPurple};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  background: transparent;
  border: none;

  &:hover {
    color: ${({ theme }) => theme.color.orange};
    transition: color 0.3s ease;
  }

  &:focus {
    color: ${({ theme }) => theme.color.orange};
    transition: color 0.3s ease;
  }
`;

export const DailyLitr = styled.p`
  color: ${({ theme }) => theme.color.blue};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`;

export const DailyEditContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledBottleImage = styled.img`
  position: absolute;
  top: 80px;
  left: 5px;
  z-index: -1;

  @media ${({ theme }) => theme.device.tablet} {
    top: 0;
    left: 90px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    top: -10px;
    left: -110px;
  }
`;
