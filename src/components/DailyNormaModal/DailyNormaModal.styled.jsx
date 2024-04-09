import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  padding: 24px 12px;
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  z-index: 4;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`;

export const TopLineStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const TitleStyled = styled.h2`
  font-family: 'Roboto-Medium';
  /* font-weight: 500; */
  font-size: 26px;
  line-height: 1.23077;
  /* color: #2f2f2f; */
`;

export const CloseOutlinedIconStyled = styled(CloseOutlinedIcon)`
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`;
export const FormulesStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const FormuleStyled = styled.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 1.25;
  /* color: #2f2f2f; */
`;

export const SpanStyled = styled.span`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 18px;
  line-height: 1.33333;
  color: ${({ theme }) => theme.color.blue};
`;

export const MarkStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.color.paleBlue};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: auto;
`;

export const TextStyled = styled.p`
  font-family: 'Roboto-Regular';
  /* font-weight: 400; */
  font-size: 12px;
  line-height: 1.33333;
  color: #8f8f8f;
`;

export const StarStyled = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;
