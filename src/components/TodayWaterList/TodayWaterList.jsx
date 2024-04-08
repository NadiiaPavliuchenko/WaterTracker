import sprite from "../../assets/sprite.svg" 
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentDay } from "../../store/water/waterSelectors"
import { WaterTodayListStyle } from "./TodayWaterList.styled"
import TodayListModal from '../TodayListModal/TodayListModal'
import { getCurrentDayInfoThunk, deleteDrinkThunk, editDrinkThunk } from '../../store/water/waterOperations.js'



const TodayWaterList = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const dayInfoTrunks = useSelector(getCurrentDay)
  const dispatch = useDispatch()
   
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
      date: 16.12
    },
    {
      id: 4,
      volume: "50 ml",
      date: 18.01
    },
    {
      id: 5,
      volume: "300 ml",
      date: 19.03
    },
    {
      id: 6,
      volume: "100 ml",
      date: 21.05
    },
    {
      id: 7,
      volume: "5 ml",
      date: 22.05
    }
  ]

  const handleWaterEdit = (evt) => { 
    setIsEditOpen(true)
    // console.dir(evt.target.closest('LI').id)
    
    
  }
  const handleCloseClick = () => {
    setIsEditOpen(false)
  }
  const handleDelete = (evt) => {
    console.dir(evt.target.closest('LI').id)
    dispatch(deleteDrinkThunk(evt.target.closest('LI').id))
  }
  
  return <>
    <WaterTodayListStyle>
      <h3 className="title">Today</h3>
      <ul className="waterList">
      {TestDateDailyInfo.length > 0 ? TestDateDailyInfo.map((item) => (
        <li className="waterItem" key={ item.id} id={ item.id}>     
          <div className="volumeAdnDate">
            <svg className="waterGlass" width="26" height="26" stroke="#9ebbff" fill="none">
              <use href={ sprite + "#water-glass" }></use>
            </svg>
            <span className="waterVolume">{item.volume }</span>
            <span className="waterTime">{item.date }</span>
          </div>
          <div className="editDelete">
            <svg onClick={ handleWaterEdit } width="16" height="13" stroke="#9ebbff" fill="none">
              <use href={sprite + "#pencil-square"}>
              </use>
            </svg>
            <svg onClick={ handleDelete } width="16" height="16" stroke="#ef5050" fill="none">
              <use href={sprite + "#trash"}></use>
            </svg>
          </div>
        </li>)): <p>You don't have records on this day</p>}    
      </ul>
      <h3 className="addWater">+ Add water</h3>
    </WaterTodayListStyle>
    {isEditOpen && (
          <TodayListModal isModalOpen={isEditOpen} closeModal={handleCloseClick} />
        )}
    </>
};

export default TodayWaterList;
