import styled from 'styled-components';
import bottle_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png'; 
import bottle_tab_1x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_1x.png';
import bottle_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png';

export const StyledBottleImage = styled.img`
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 100%;
    min-height: 208px;
  }

  @media screen and (min-width: 768px) { 
    height: 386px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 548px;
  }
`;


