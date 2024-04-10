import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;

  // мобіл
  background-image: ${({ theme }) => theme.backgroundImage.welcomeMob};

  // табл
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${({ theme }) => theme.backgroundImage.welcomeTab};
    min-height: 100vh;
  }

  // деск
  @media ${({ theme }) => theme.device.desktop} {
    background-image: ${({ theme }) => theme.backgroundImage.welcomeDesk};
    min-height: 100vh;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  min-height: calc(100vh - 40px);

  // табл
  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 40px;
    min-height: calc(100vh - 50px);
  }

  // деск
  @media ${({ theme }) => theme.device.desktop} {
    padding-top: 49px;
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesDesk};
    min-height: calc(100vh - 109px);
  }
`;

export const TurnOff = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 25px;
  bottom: 0;
  right: 4px;
  padding: 12px;
  margin: 0;
  background-color: ${({ theme }) => theme.color.skyBlue};
  color: ${({ theme }) => theme.color.blue};
  font-family: 'Roboto-Bold';
  font-size: 12px;
  text-align: center;
  z-index: 50;
  cursor: pointer;
  transition: height 0.3s ease-in-out;

  &:hover {
    height: 100px;
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    border-radius: 25px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 120px;
    height: 80px;
    font-size: 20px;

    &:hover {
      height: 120px;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 160px;
    height: 80px;
    font-size: 24px;
    border-radius: 25px 25px 0 0;
  }
`;
