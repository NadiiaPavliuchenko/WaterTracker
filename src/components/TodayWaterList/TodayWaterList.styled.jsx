import styled from 'styled-components';

export const WaterTodayListStyle = styled.div`
@media screen and (min-width: 320px) {
    .title {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.25;
        color: #2f2f2f;
    }
    .waterList {
        border-radius: 10px;
        padding: 24px 8px;
        width: 280px;
    }
    .waterItem {
        display: flex;
        flex-direction: row;
        width: 254px;
        height: 26px;
        border-bottom: 1px solid #d7e3ff;
        align-items: center;
        justify-content: space-between;
        gap: 38px;
    }
    .volumeAdnDate {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

    }
    .waterVolume {
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

    }
}
`