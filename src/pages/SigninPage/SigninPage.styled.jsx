import styled from 'styled-components';
// import bg_mob_register_1x from '../../assets/images/background/RegisterLoginPage/mob/bg_mob_register_1x.png';
// import bg_tab_register_1x from '../../assets/images/background/RegisterLoginPage/tab/bg_tab_1x.png';
// import bg_desk_register_1x from '../../assets/images/background/RegisterLoginPage/Desk/bg_desk_1x.png';

export const SignInPageStyle = styled.div`
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesMob};

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
      background-color: transparent;

      line-height: 1.25;
      color: ${({ theme }) => theme.color.blue};
    }
    .bottle {
      // margin-top: 40px;
      position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesTab};
    .wrapper {
      width: 100%;
      position: relative;
    }
    .bottle {
      width: 736px;
      position: absolute;
      top: 0;
      left: 100px;
    }
    .link-container {
      width: 336px;
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesDesk};
    background-size: 100%;
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {
      width: 916px;
      position: absolute;
      top: 30px;
      left: -100px;
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
