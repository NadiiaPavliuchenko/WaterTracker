import styled from 'styled-components';
import { Link } from '@mui/material';
// import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
import { Box } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ModalBox = styled(Box)`
  border-radius: 10px;
  padding: 32px 12px;
  width: 280px;
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  top: 50%;
  left: 50%;
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;
  transform: translate(-50%, -50%);
  @media ${({ theme }) => theme.device.tablet} {
    padding: 32px 24px 64px 24px;
    width: 704px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 32px 24px;
    width: 1008px;
  }
`;

export const ModalContentWrapper = styled.div`
  overflow: scroll;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: 'Roboto-Bold';
`;

export const StyledCloseSvg = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.color.blue};
  transform: rotate(45deg);
  cursor: pointer;
`;

export const FormSubtitle = styled.h3`
  font-size: 18px;
  font-family: 'Roboto-Bold';
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  font-family: 'Roboto-Bold';
`;

export const SmallControlLabel = styled(FormControlLabel)`
  font-size: 16px;
  height: 14px;
  font-family: 'Roboto-Regular';
`;

export const SmallLabel = styled.label`
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const FilePickerWrapper = styled.div`
  margin: 8px 0 24px 0;
  display: flex;
  gap: 8px;
`;

export const ImgThumb = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  text-align: center;
`;

export const FilePickerLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.blue};
  font-family: 'Roboto-Medium';
  font-size: 14px;
  cursor: pointer;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const PasswordFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

export const VisibilityIconsWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 229px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 40px;
    left: 365px;
  }
  color: ${({ theme }) => theme.color.blue};
`;

export const StyledField = styled(Field)`
  border: 1px solid
    ${({ theme, error }) => (error ? theme.color.red : theme.color.paleBlue)};
  border-radius: 6px;
  padding: 12px 10px 12px 10px;
  margin-top: 8px;
  background-color: transparent;
  color: ${({ theme, error }) => (error ? theme.color.red : theme.color.blue)};
  font-size: 16px;
  &::placeholder {
    color: ${({ theme, error }) =>
      error ? theme.color.red : theme.color.blue};
  }
  &:hover,
  &:focus {
    outline: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 392px;
    height: 44px;
  }
`;

export const FormContentWrapper = styled.div`
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    gap: 24px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  font-family: 'Roboto-Bold';
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  @media ${({ theme }) => theme.device.tablet} {
    float: right;
    width: 160px;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.color.red};
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
  font-family: 'Roboto-Bold';
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
  }

  @media ${({ theme }) => theme.device.tablet} {
    float: right;
    width: 160px;
    font-size: 18px;
  }
`;

export const StyledSvg = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`;

export const RedError = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
`;

export const RadiosWrapper = styled.label`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.device.desktop} {
    margin-bottom: 50px;
  }

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const RadioWrapper = styled.label`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  /* line-height: 1.25; */
  /* color: #2f2f2f; */

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
  width: 11px;
  height: 11px;
`;
