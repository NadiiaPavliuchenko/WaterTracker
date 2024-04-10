import styled from 'styled-components';

export const TitleStyled = styled.h3`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  margin-bottom: 16px;
`;

export const RadiosWrapper = styled.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const RadioWrapper = styled.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RadioLabel = styled.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const RadioInputCustom = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const RadioStyled = styled.svg`
  width: 12px;
  height: 12px;
`;

export const InputWrapper = styled.label`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const InputStyled = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.blue};
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: none;
  }

  &.activated {
    border: 1px solid ${({ theme }) => theme.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.blue};
  }

  &.error {
    border-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.red};
  }

  &::placeholder {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.skyBlue};
  }
`;

export const TextsStyled = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  /* height: 24px; */
`;

export const TextStyled = styled.p`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  width: 190px;

  @media ${({ theme }) => theme.device.tablet} {
    width: auto;
    height: 24px;
  }
`;

export const LitersStyled = styled.p`
  font-family: 'Roboto-Bold', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: ${({ theme }) => theme.color.blue};
`;
