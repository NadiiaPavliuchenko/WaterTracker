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

  @media ${({ theme }) => theme.device.tablet} {
    width: 704px;
    height: 504px;
    padding: 32px 24px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 592px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
    font-size: 16px;
  }
  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 26px;
    /* font-weight: 500; */
    line-height: 32px;
    text-align: left;
  }

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    /* font-weight: 500; */
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
  }
  .counterBtn {
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: ${({ theme }) => theme.color.blue};
    border-radius: 40px;
    border: none;
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    /* font-weight: 700; */
    line-height: 24px;
    text-align: center;
  }

  .input {
    display: flex;
    width: 100%;
    height: 44px;
    padding: 12px 10px;
    background-color: transparent;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.paleBlue};
    color: ${({ theme }) => theme.color.blue};
  }
  .amount {
    color: ${({ theme }) => theme.color.blue};
    font-family: 'Roboto-Bold';
    font-size: 18px;
    /* font-weight: 700; */
    line-height: 24px;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
  .confirm {
    width: 160px;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.blue};
    box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    /* font-weight: 500; */
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
`;
