import styled from 'styled-components';

export const SignInPageStyle = styled.div`
  background-size: 100vw, contain;
  background-position: 0, 10px;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesMob};
  
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
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 1.23077;
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
      // position: relative;
      width: 280px;
      z-index: -10;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesTab};
 
    
    .formCont {
      width: 336px;
      position: absolute;
      top: 25px;
    }
    .bottle {
      width: 736px;
      height: 548px;
      position: absolute;
      top: 60px;
      right: -150px;
    }
    .link-container {
      width: 336px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesDesk};
    background-size: 1404px, 582px;
    background-position-y: 0px;
    background-position-x: -30px;
    .bottle {
      width: 916px;
      height: 680px;
      position: absolute;
      top: 0px;
      left:  -70px;
    }
    .formCont {
      position: absolute;
      top: 113px;
      right: 198px;
    }
    
    .link-container {
      width: 384px;
    }
  }
`;
