import styled from 'styled-components';

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  gap: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  width: 280px;
  height: 648px;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 16px;
  }
  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close {
    fill: ${({ theme }) => theme.color.blue};
    cursor: pointer;
  }
  .counter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
  }
  .counterBtn {
    width: 44px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.color.skyBlue};
    border-radius: 50%;
    color: ${({ theme }) => theme.color.blue};
    background-color: transparent;
  }
  .waterAmount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 36px;
    padding: 6px, 10px;
    background-color: ${({ theme }) => theme.color.paleBlue};
    color: #${({ theme }) => theme.color.blue};
    border-radius: 40px;
    border: none;
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
  }
  .input {
    display: flex;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.palelue};
    color: ${({ theme }) => theme.color.blue};
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    .close {
      position: absolute;
      right: 12px;
      top: 24px;
    }
    .currentDrink {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 12px;
      background-color: ${({ theme }) => theme.color.paleBlue};
      border-radius: 10px;
      padding: 8px 24px;
      height: 52px;
    }
    .amount {
      font-size: 18px;
      line-height: 1.33333;
      font-weight: 400;
      color: ${({ theme }) => theme.color.blue};
    }
    .currentTime {
      font-weight: 400;
      enterLabel   font-size: 12px;
      line-height: 2;
    }    
    .enterLabel {
      padding-top: 12px;
      font-weight: 500;
      font-size: 18px; 
      line-height: 1.11111;
      color: #2f2f2f;

    }
    .input {
      border: 1px solid ${({ theme }) => theme.color.paleBlue};
      border-radius: 6px;
      padding: 12px 10px;
      width: 256px;
      height: 44px;
    }
    .buttons {
      padding-top: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
    }
    .waterAmountConfirm {
      padding-top: 12px;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.33333;
      text-align: center;
      color: ${({ theme }) => theme.color.blue};
    }
    .confirm {
      border-radius: 10px;
      padding: 8px 30px;
      width: 256px;
      height: 36px;
      background-color: ${({ theme }) => theme.color.blue};
      border: none;
      box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.color.white};
    }
    .confirm:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
    }
    .confirm:active {
      box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 704px;
    height: 580px;
    padding: 32px 24px;

    .close {
      position: absolute;
      right: 30px;
      top: 36px;
    }
    .currentDrink {
      width: 254px;
    }
    .input {
      width: 544px;
    }
    .buttons {      
      display: flex;
      align-items: center;
      justify-content: end;
      flex-direction: row;
      gap: 18px;
    }
    .confirm {
      width: 160px;
      height: 44px;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 592px;
    height: 580px;
  }
  
`;
