import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentDay } from '../../store/water/waterSelectors';
import { WaterTodayListStyle } from './TodayWaterList.styled';
import TodayListModal from '../TodayListModal/TodayListModal';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import DeleteWaterIntakesModal from '../DeleteWaterIntakesModal/DeleteWaterIntakesModal';

const TodayWaterList = () => {
  
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isAddWaterOpen, setIsAddWaterOpen] = useState(false)
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false)
  const [currentIntakes, setCurrentIntakes] = useState({})
  const dayInfoTrunks = useSelector(getCurrentDay) 
  
  const handleWaterEdit = (evt) => { 
    const current = {
      id: evt.target.closest('LI').id,
      ml: Number(
        evt.target.closest('LI').childNodes[0].childNodes[1].textContent
      ),
      time: evt.target.closest('LI').attributes.time.value,
    };
    setCurrentIntakes(current);
    setIsEditOpen(true);
  };
  const handleCloseWaterEdit = () => {
    setIsEditOpen(false);
  };
  const handleOpenAddWater = () => {
    setIsAddWaterOpen(true);
  };
  const handleCloseAddWater = () => {
    setIsAddWaterOpen(false);
  };
  const handleOpenCheckDelete = (evt) => {
    const current = {
      id: evt.target.closest('LI').id,
      time: evt.target.closest('LI').attributes.time.value,
    };
    setCurrentIntakes(current);
    setIsCheckModalOpen(true);
  };
  const handleCloseCheckDelete = () => {
    setIsCheckModalOpen(false);
  };
  
  return (
    <>
      <WaterTodayListStyle>
        <h3 className="title">Today</h3>
        <ul className="waterList">
          {dayInfoTrunks.waterIntakes.length > 0 ? (
            dayInfoTrunks.waterIntakes.map((item) => (
              <li
                className="waterItem"
                key={item._id}
                id={item._id}
                time={item.consumedAt}
              >
                <div className="volumeAdnDate">
                  <svg
                    className="waterGlass"
                    width="26"
                    height="26"
                    stroke="#9ebbff"
                    fill="none"
                  >
                    <use href={sprite + '#water-glass'}></use>
                  </svg>
                  <span className="waterVolume">{item.ml} </span>
                  <span className="waterVolumeMl">ml</span>
                  <span className="waterTime">
                    {item.consumedAt.slice(11, 16)}
                  </span>
                </div>
                <div className="editDelete">
                  <svg
                    className='editIcon'
                    onClick={handleWaterEdit}
                    width="16"
                    height="13"
                    stroke="#9ebbff"
                    fill="none"
                  >
                    <use href={sprite + '#pencil-square'}></use>
                  </svg>
                  <svg
                    className='deleteIcon'
                    onClick={handleOpenCheckDelete}
                    width="16"
                    height="16"
                    stroke="#ef5050"
                    fill="none"
                  >
                    <use href={sprite + '#trash'}></use>
                  </svg>
                </div>
              </li>
            ))
          ) : (
            <p>Today you don&apos;t have records</p>
          )}
        </ul>
        <h2 className="addWater" onClick={handleOpenAddWater}>
          + Add water
        </h2>
      </WaterTodayListStyle>
      {isEditOpen && (
        <TodayListModal
          isModalOpen={isEditOpen}
          closeModal={handleCloseWaterEdit}
          currentIntakes={currentIntakes}
        />
      )}

      {isAddWaterOpen && (
        <AddWaterModal
          isModalOpen={isAddWaterOpen}
          closeModal={handleCloseAddWater}
        />
      )}

      {isCheckModalOpen && (
        <DeleteWaterIntakesModal
          isModalOpen={isCheckModalOpen}
          onModalClose={handleCloseCheckDelete}
          currentIntakes={currentIntakes}
        />
      )}
    </>
  );
};

export default TodayWaterList;
