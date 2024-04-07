import styled from 'styled-components';

export const WaterTodayListStyle = styled.div`

*::-webkit-scrollbar {
   width: 4px; 
} 
*::-webkit-scrollbar-track {
   background: #d7e3ff; 
} 
*::-webkit-scrollbar-thumb {
   background-color: blue;
   border-radius: 8px;
   border: 3px solid #9ebbff;
}


@media screen and (min-width: 320px) {
    
    background-color: #ecf2ff;
    min-width: 280 px;
    
    .title {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.25;
        color: #2f2f2f;
        height: 46px;
    }
    .waterList {
        overflow-y: scroll;       

        display: flex;
        justify-content: space-between;
        flex-direction: column;        
        align-items: center;
        
        border-radius: 10px;
        padding: 24px 8px;
        width: 100%;
        max-height: 200px;
    }
    
    .waterItem {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #d7e3ff;
        align-items: center;
        padding: 12px 0;
    }
    
    .volumeAdnDate {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

    }
    .waterGlass {
        width=26px;
        height=26px;
    }
    .waterVolume {
        display: flex;
        justify-content: end;
        min-width: 60px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.33333;
        color: #407bff;
    }
    .waterTime {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 2;
        color: #2f2f2f;
    }
    .editDelete {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

    }
    .addWater {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.25;
        color: #407bff;
        height: 46px;
        display: flex;
        align-items: end;
        padding-left: 10px;
    }
}
 @media screen and (min-width: 768px) {
    .waterList {
        width: 100%;

    }
   

 }


`