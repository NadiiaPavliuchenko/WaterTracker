import styled from 'styled-components';

export const ModalBox = styled.div`
  position: relative;
`;

export const ButtonBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const AvatarStile = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
`;

export const IconStyle = styled.img`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.color.blue};
  fill: transparent;
`;

// import styled from 'styled-components';

// export const ButtonBox = styled.div`

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   cursor: pointer;

//   &:hover,
//   &:focus {
//     cursor: pointer;
//   }
// `;

// export const AvatarStile = styled.div`
//   width: 28px;
//   height: 28px;
//   overflow: hidden;
//   border-radius: 50%;
// `;

// export const IconStyle = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// export const Icon = styled.svg`
//   margin-left: 8px;
//   width: 28px;
//   height: 28px;
//   stroke: ${({ theme }) => theme.color.blue};
//   fill: transparent;
// `;

// export const KeyboardArrowUpIcon = styled.buttonBox`
//   transform: ${(props) =>
//     props.isOpenPopup ? 'rotate(180deg)' : 'rotate(0deg)'};
//   transition: transform 0.5s ease-in-out;
// `;
