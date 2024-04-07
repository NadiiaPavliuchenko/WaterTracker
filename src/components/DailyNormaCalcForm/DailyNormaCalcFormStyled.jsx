import styled from 'styled-components';

export const TitleStyled = styled.h3`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
`;

export const RadiosWrapper = styled.label`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const RadioWrapper = styled.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`;

export const InputWrapper = styled.label`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.color.paleBlue};
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  background-color: transparent;
  color: ${({ theme }) => theme.color.blue};
  outline: none;

  &.activated {
    border: 1px solid ${({ theme }) => theme.color.paleBlue};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.blue};
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.color.red};
    border-radius: 6px;
    padding: 12px 10px;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.red};
  }

  &::placeholder {
    font-family: 'Roboto-Regular';
    /* font-weight: 400; */
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.skyBlue};
  }
`;

export const TextsStyled = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const TextStyled = styled.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
  width: 190px;

  @media ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;

export const LitersStyled = styled.p`
  font-family: 'Roboto-Bold', sans-serif;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({ theme }) => theme.color.blue};
`;
