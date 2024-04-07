import styled from 'styled-components';
import bg_mob_register_1x from '../../assets/images/background/RegisterLoginPage/mob/bg_mob_register_1x.png';
import bg_tab_register_1x from '../../assets/images/background/RegisterLoginPage/tab/bg_tab_1x.png';
import bg_desk_register_1x from '../../assets/images/background/RegisterLoginPage/Desk/bg_desk_1x.png';

export const SignUpPageStyle = styled.div`
  background-size: 100vw, contain;
  background-position: 0, 10px;
  background-repeat: no-repeat;
  background-image: url(${bg_mob_register_1x});

  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 280px;
  }
  button {
    border: none;
    background-color: transparent;
  }

  @media ${({ theme }) => theme.device.mobile} {
    .title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
      /* color: #2f2f2f; */
      margin-top: 20px;
    }
    .link {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;

      line-height: 1.25;
      color: ${({ theme }) => theme.color.blue};
    }
    .bottle {
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: url(${bg_tab_register_1x});
    .wrapper {
      width: 100%;
      position: relative;
    }
    .bottle {
      width: 736px;
      position: absolute;
      top: 10px;
      right: -150px;
    }
    .link-container {
      width: 336px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    background-image: url(${bg_desk_register_1x});
    background-size: 1404px, 582px;
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {
      width: 916px;
      position: absolute;
      top: -100px;
      left: -210%;
    }
    .formCont {
      position: absolute;
      top: 120px;
      right: 90px;
    }
    .wrapper {
      width: 100%;
      position: relative;
    }
    .link-container {
      width: 384px;
    }
  }
`;
