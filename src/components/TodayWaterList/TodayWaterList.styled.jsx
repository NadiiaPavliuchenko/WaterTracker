import styled from 'styled-components';

export const WaterTodayListStyle = styled.div`
  *::-webkit-scrollbar {
    width: 4px;
  }
  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.paleBlue};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.blue};
    border-radius: 8px;
    border: 3px solid ${({ theme }) => theme.color.skyBlue};
  }

  @media screen and (min-width: 320px) {
    background-color: ${({ theme }) => theme.color.lavender};

    min-width: 280px;

    .title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 1.25;
      height: 40px;      
    }
    .waterList {
      overflow-y: scroll;  

      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 12px;
      align-items: center;

      border-radius: 10px;
      padding: 24px 8px;
      width: 100%;
      max-height: 175px;
    }

    .waterItem {
      width: 100%;
      min-height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.color.paleBlue};
      align-items: center;      
    }

    .volumeAdnDate {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .waterGlass {
      width: 26px;
      height: 26px;
    }
    .waterVolume {
      display: flex;
      justify-content: end;
      min-width: 60px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
      color: ${({ theme }) => theme.color.blue};
    }
    .waterVolumeMl {
      display: flex;
      justify-content: end;      
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
      color: ${({ theme }) => theme.color.blue};
    }
    .waterTime {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 2;
    }
    .editDelete {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }
    .addWater {
      cursor: pointer;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      display: flex;
      align-items: end;
      color: ${({ theme }) => theme.color.blue};
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    .waterList {
      width: 100%;
      max-height: 169px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    
    .waterList {
      width: 100%;
      max-height: 169px;
      
    }

  }



`;
