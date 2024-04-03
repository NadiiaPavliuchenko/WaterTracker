import styled from 'styled-components';

export const HiddenTitle = styled.h1`
  display: none;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2f2f2f;
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and(min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #2f2f2f;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const BenefitsTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2f2f2f;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: #407bff;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and(min-width: 768px) {
    width: 280px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and(min-width: 1440px) {
    width: 384px;
  }
`;

export const Svg = styled.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and(min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
