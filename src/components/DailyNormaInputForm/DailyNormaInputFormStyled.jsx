import styled from 'styled-components';

export const LabelStyled = styled.label`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 1.11111;
  /* color: #2f2f2f; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;
`;

export const ButtonStyled = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  background: ${({ theme }) => theme.color.blue};
  font-family: 'Roboto-Medium', sans-serif;
  /* font-weight: 500; */
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  border: none;
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
    display: block;

    width: 160px;
  }
`;

export const MessageOfError = styled.p`
  color: ${({ theme }) => theme.color.red}; /* Set the text color to red */
  position: absolute; /* Position out of the document flow */
  bottom: -20px; /* Position below the input */
  left: 0; /* Align to the left of the input */
  font-size: 0.8rem; /* Smaller font size */
`;
