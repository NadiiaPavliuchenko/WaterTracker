import styled from 'styled-components';

import bg_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bg_desk_1x.png';


export const HomeSection = styled.div`
  background-image: url(${bg_desk_1x}); 
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex-direction: row;
  }
`;

export const BottleSection = styled.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const HomeStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 90vh;
    flex: 1;
  }
`;


