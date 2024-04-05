import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { useState } from 'react';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';
import { ModalDaily, DailyTitle, DailyBtn, DailyLitr, DailyEditContainer } from './DailyNorma.styled';

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
   
      <ModalDaily>
        <DailyTitle>My daily norma: </DailyTitle>
        <DailyEditContainer>
          <DailyLitr>{waterRateL}</DailyLitr>
          <DailyBtn onClick={openModal}>Edit</DailyBtn>
        </DailyEditContainer>
        <DailyNormaModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </ModalDaily>
   
  );
};

export default DailyNorma;
