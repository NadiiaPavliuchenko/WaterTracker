import styled from 'styled-components';

export const ModalDaily = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  height: 74px;
  width: 150px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 12px;
  border-radius: 10px;
  border: 1px solid var(--Secondary-color-2, #ecf2ff);
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  /* margin-bottom: 232px; */
`;

export const DailyTitle = styled.h2`
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`;

export const DailyBtn = styled.button`
  display: block;
  padding: 0;
  color: #8baeff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  background: transparent;
  border: none;

  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }

  &:focus {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;


export const DailyLitr = styled.p`
 color:  #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
`;

export const DailyEditContainer = styled.div`
 display: flex;
  gap: 12px;
`;