import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90px;
  flex-direction: row;
  align-items: center;
  gap: 23px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  height: 100%;

  h3 {
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 18px;
    color: var(--primary-blue);
  }

  .progress-bar-container {
    display: flex;
    flex-direction: column;
  }

  .progress-bar {
    position: relative;
    width: 340px;
    height: 8px;
    background-color: rgba(215, 227, 255, 1);
  }

  .progress {
    position: relative;
    height: 100%;
    background-color: rgba(158, 187, 255, 1);
    text-align: center;
    line-height: 20px;
    font-size: 12px;
  }

  .progress-text {
    position: absolute;
    top: -200%;
    left: 100%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: var(--primary-blue);
  }

  .marker-0,
  .marker-50,
  .marker-100 {
    position: absolute;
    bottom: -20px;
    font-size: 12px;
    color: #666666;
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
    background-color: rgba(255, 255, 255, 1); /* Цвет бегунка */
    border: 1px solid rgba(64, 123, 255, 1);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const AddWaterBtn = styled.button`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 10px 30px;
  background-color: var(--primary-blue);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: var(--primary-white);
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;
