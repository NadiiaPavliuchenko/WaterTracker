import styled from 'styled-components';

export const HiddenTitle = styled.h1`
  display: none;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  /* color: #2f2f2f; */
  line-height: 32px;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  /* color: #2f2f2f; */
  line-height: 30px;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  /* color: #2f2f2f; */
  line-height: 20px;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tracker = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin: 0;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 439px;
  }
`;

export const BenefitsTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  /* color: #2f2f2f; */
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 30px;
  color: ${({ theme }) => theme.color.white};
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 16px;
  line-height: 20px;
  border: none;
  background-color: ${({ theme }) => theme.color.blue};
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 336px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 384px;
  }
`;

export const Svg = styled.svg`
  stroke: ${({ theme }) => theme.color.blue};
  fill: none;
  width: 32px;
  height: 32px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 40px;
    height: 40px;
  }
`;
