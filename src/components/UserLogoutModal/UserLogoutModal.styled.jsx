import styled from 'styled-components';

export const ModalBox = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 260px;
  padding: 32px 24px;
  background-color: #ffffff;

  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  button {
    width: 100%;
    height: 36px;
    padding: 8px 30px 8px 30px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px #407bff57;
  }
  .confirm {
    color: #fff;
    background-color: #ef5050;
  }

  .cancel {
    color: #407bff;
    background-color: #d7e3ff;
  }

  @media screen and (min-width: 768px) {
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
