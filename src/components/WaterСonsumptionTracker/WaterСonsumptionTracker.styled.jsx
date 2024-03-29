import styled from 'styled-components';

export const HiddenTitle = styled.h1`
  display: none;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: #2F2F2F;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #2F2F2F;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: #2F2F2F;
  line-height: 20px;
  margin-bottom: 24px;
  min-width: 1440px;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tracker = styled.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;
`;

export const BenefitsTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: #2F2F2F;
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
  background-color: #407BFF;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

    min-width: 1440px;
    width: 384px;
`;