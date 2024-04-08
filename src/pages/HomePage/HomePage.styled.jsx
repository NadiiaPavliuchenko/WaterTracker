import styled from 'styled-components';

export const HomeWrapper = styled.div`
  background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesMob};
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  margin: auto;

  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesTab};
    padding-bottom: 44px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    background-image: ${({ theme }) => theme.backgroundImage.bodyBubblesDesk};
    padding-top: 20px;
    padding-bottom: 40px;
    width: 1404px;
    height: 582px;
  }
`;

export const HomeSection = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
  }
`;

export const BottleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HomeStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    flex: 1;
  }
`;

export const BlueFrame = styled.div`
  background-color: ${({ theme }) => theme.color.lavender};
  padding: 24px 8px;
  width: 280px;
  height: 836px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 32px 24px;
    width: 704px;
    height: 688px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 592px;
    height: 680px;
  }
`;
