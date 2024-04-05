import sprite from "../../assets/sprite.svg" 
import { useDispatch, useSelector } from 'react-redux'
import {getCurrentDay} from "../../store/water/waterSelectors"
import { getCurrentDayInfoThunk, deleteDrinkThunk, editDrinkThunk } from '../../store/water/waterOperations.js'


const TodayWaterList = () => {
  const dayInfoTrunks = useSelector(getCurrentDay)
  console.log(dayInfoTrunks)
  console.log(dayInfoTrunks.waterIntakes)
  const TestDateDailyInfo = [
    { "14:00" : "200ml" },
    { "14:30": "300ml" },
    { "14:30": "300ml" },
    {"14:30": "300ml"}
  ]
// const start = Date.now()
// console.log(start)
  const time = Object.keys(TestDateDailyInfo)
  const value = Object.values(TestDateDailyInfo)
  console.log(time)
  console.log(value)


  return <>
    <h3>Today</h3>
    <ul>
      {}
    <li>     
      <svg width="17" height="22" stroke="#9ebbff" fill="none">
          <use href={ sprite + "#water-glass" }></use>
      </svg>
      <div>
      <span>200 ml</span>
        <span>14:00 PM</span>
      </div>
      <div>
        <svg width="16" height="16" stroke="#9ebbff" fill="none">
          <use href={sprite + "#pencil-square"}>
          </use>
        </svg>
        <svg width="16" height="16" stroke="#ef5050" fill="none">
          <use href={sprite + "#trash"}></use>
        </svg>
        </div>
      </li>
      </ul>
    <h3>+ Add water</h3>
    </>
};

export default TodayWaterList;
