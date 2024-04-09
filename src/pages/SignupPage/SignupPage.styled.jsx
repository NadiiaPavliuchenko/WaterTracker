import styled from 'styled-components';

export const SignUpPageStyle = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesMob};
  margin-top: 24px;

  .wrapper {
    width: 100%;
    position: relative;
  }
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
      font-family: 'Roboto-Medium', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
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
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesTab};

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
  @media ${({ theme }) => theme.device.tabletAndDesktop} {
    .link {
      z-index: 1;
    }
    .bottle {
      position: absolute;
      top: 30px;
      right: -15px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesDesk};
    background-size: 1404px, 582px;
    background-position-y: 0px;
    background-position-x: -30px;
    margin-top: 0;

    .bottle {
      width: 916px;
      position: absolute;
      top: -100px;
      left: -210%;
    }
    .formCont {
      order: 2;
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
