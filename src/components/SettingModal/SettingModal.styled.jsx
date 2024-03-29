import styled from 'styled-components';
import { Link } from '@mui/material';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1440px',
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

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

export const ModalDiv = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 32px 12px;
  @media ${device.tablet} {
    padding: 32px 24px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: var(--roboto-bold);
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  color: var(--primary-blue);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSubtitle = styled.h3`
  font-size: 18px;
  font-family: var(--roboto-bold);
  margin-bottom: 12px;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  font-family: var(--roboto-bold);
`;

export const SmallLabel = styled.label`
  font-size: 16px;
  font-family: var(--roboto-regular);
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
`;

export const FilePickerLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--primary-blue);
  font-family: var(--roboto-medium);
  font-size: 14px;
`;

export const RadioGroup = styled.div`
  margin-bottom: 24px;
  @media ${device.desktop} {
    margin-bottom: 52px;
  }
`;
