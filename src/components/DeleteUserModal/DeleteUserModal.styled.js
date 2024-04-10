import styled from 'styled-components';

export const ModalBox = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

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
    margin-bottom: 24px;
  }
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .close {
    fill: ${({ theme }) => theme.color.blue};
    cursor: pointer;
  }

  .label {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33333;
  }
  .input-container {
    position: relative;
    width: 100%;
  }
  .input {
    font-family: 'Roboto-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    margin-top: 8px;
    width: 100%;
    height: 44px;
  }
  .input:hover,
  .input:focus {
    outline: none;
  }
  .input::placeholder {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.skyBlue};
  }
  .watchPasswordIcon {
    position: absolute;
    right: 20px;
    top: 55%;
    transform: translate(0%, -50%);
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 592px;
  }

  h2 {
    font-size: 26px;
  }

  p {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  button {
    font-family: 'Roboto-Medium', sans-serif;
    font-weight: 500;
    width: 100%;
    height: 36px;
    padding: 8px 30px 8px 30px;
    border: none;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  }

  button:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }

  button:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  .confirm {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
  }

  .cancel {
    color: ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.paleBlue};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 344px;
    margin-left: 200px;
    flex-direction: row-reverse;

    button {
      width: 160px;
      height: 44px px;
      padding: 10px 30px 10px 30px;
    }
  }
`;
