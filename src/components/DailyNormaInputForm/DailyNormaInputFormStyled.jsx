import styled from 'styled-components';

export const LabelStyled = styled.label`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  line-height: 1.11111;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const ButtonStyled = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  background: ${({ theme }) => theme.color.blue};
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 10px 30px;
    margin-left: auto;
    font-size: 18px;

    width: 160px;
  }
`;

export const MessageOfError = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({ theme }) => theme.color.red};
`;
