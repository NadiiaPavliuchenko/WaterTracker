import DailyNormaModal from 'components/DailyNormaModal/DailyNormaModal';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { useState } from 'react';

export const DailyNorma = () => {
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
        <DailyNormaModal onClose={closeModal} onShow={isModalOpen} />
      </div>
    </div>
  );
};