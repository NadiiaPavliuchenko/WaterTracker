import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { useState } from 'react';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';
import bottle_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png' 
import bottle_tab_1x from '../../assets/images/background/RegisterLoginPage/tab/bottle_tab_1x.png'
import bottle_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png'
import { StyledBottleImage } from './DailyNorma.styled';

const DailyNorma = () => {
  const { waterRate } = useSelector(getCurrentUser);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Перетворення мл у л
  const waterRateL = (waterRate / 1000).toFixed(1) + ' L';

  return (
    <div>
      <div>
        <h2>My daily norma: </h2>
        <div>
          <p>{waterRateL}</p>
          <button onClick={openModal}>Edit</button>
        </div>
        <DailyNormaModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
       <StyledBottleImage img src={bottle_desk_1x} alt="Bottle" /> 
    </div>
  );
};

export default DailyNorma;
