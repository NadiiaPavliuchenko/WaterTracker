import sprite from "../../assets/sprite.svg" 
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentDay } from "../../store/water/waterSelectors"
import { WaterTodayListStyle } from "./TodayWaterList.styled"
import { getCurrentDayInfoThunk, deleteDrinkThunk, editDrinkThunk } from '../../store/water/waterOperations.js'


const TodayWaterList = () => {
  const dayInfoTrunks = useSelector(getCurrentDay)
  console.log(dayInfoTrunks)
  console.log(dayInfoTrunks.waterIntakes)
  const TestDateDailyInfo = [
    {
      id: 1,
      volume: "200 ml",
      date: 14.02
    },
    {
      id: 2,
      volume: "200 ml",
      date: 14.45
    },
    {
      id: 3,
      volume: "150 ml",
      date: 16.10
    },
    {
      id: 4,
      volume: "50 ml",
      date: 18.00
    },
    {
      id: 5,
      volume: "300 ml",
      date: 19.00
    },
    {
      id: 6,
      volume: "100 ml",
      date: 21.00
    }
  ]
  const data = TestDateDailyInfo.map((item) =>
    ([item.id, item.date, item.volume]))
  console.log(data)


  return <>
    <WaterTodayListStyle>
    <h3 className="title">Today</h3>
    <ul className="waterList">
      {TestDateDailyInfo.length > 0 ? TestDateDailyInfo.map((item) => (
        <li className="waterItem" key={ item.id}>     
      <div className="volumeAdnDate">
      <svg width="26" height="18" stroke="#9ebbff" fill="none">
          <use href={ sprite + "#water-glass" }></use>
      </svg>
            <span className="waterVolume">{item.volume }</span>
        <span className="waterTime">{item.date }</span>
      </div>
      <div className="editDelete">
        <svg width="16" height="13" stroke="#9ebbff" fill="none">
          <use href={sprite + "#pencil-square"}>
          </use>
        </svg>
        <svg width="16" height="16" stroke="#ef5050" fill="none">
          <use href={sprite + "#trash"}></use>
        </svg>
        </div>
      </li>)): <p>you haven't drinks on that day</p>}
    
      </ul>
      <h3>+ Add water</h3>
      </WaterTodayListStyle>
    </>
};

export default TodayWaterList;
