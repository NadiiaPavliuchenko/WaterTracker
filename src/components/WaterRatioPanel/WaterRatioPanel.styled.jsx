import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 232px;
  margin-bottom: 40px;

  h3 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: ${({ theme }) => theme.color.blue};
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 43px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 326px;

    .box {
      flex-direction: row;
      align-items: center;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 466px;
  }
`;

export const ProgressContainer = styled.div`
  */ .progress-bar-container {
    display: flex;
    flex-direction: column;
    width: 280px;
    margin-bottom: 16px;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.color.paleBlue};
  }

  .progress {
    height: 100%;
    background-color: ${({ theme }) => theme.color.skyBlue};
    text-align: center;
    line-height: 20px;
    font-size: 12px;
  }

  .progress-text {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: ${({ theme }) => theme.color.blue};
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -20px;

    color: ${({ theme }) => theme.color.blue};

    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }
  .marker-100 {
    right: -50px;
  }

  .marker-0 {
    left: 0;
  }

  .marker-50 {
    left: 50%;
    transform: translateX(-50%);
  }

  .marker-100 {
    right: 0;
    transform: translateX(50%);
  }

  .indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.color.white}; /* Цвет бегунка */
    border: 1px solid ${({ theme }) => theme.color.blue};
    border-radius: 50%;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); */
  }

  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      margin-bottom: 16px;
    }
    .progress-bar-container {
      width: 336px;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    h3 {
      margin-bottom: 18px;
    }
    .progress-bar-container {
      width: 340px;
    }
  }
`;

export const AddWaterBtn = styled.button`
  width: 280px;
  height: 36px;
  padding: 6px 76px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};

  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 336px;
    height: 44px;
    gap: 10px;
    padding: 10px 104px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 178px;
    height: 44px;
    padding: 10px 30px;
  }
`;

export const ControlPointRoundedIcon = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.color.white};
`;
