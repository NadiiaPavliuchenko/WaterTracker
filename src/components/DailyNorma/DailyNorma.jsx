import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { useState } from 'react';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';
import useModal from '../../customHooks/useModal';

const DailyNorma = () => {
  const { isOpen, openModal, handleKeyDown } = useModal();
  const { waterRate } = useSelector(getCurrentUser);
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   ();
  // };

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
        <DailyNormaModal isOpen={isOpen} />
      </div>
    </div>
  );
};

export default DailyNorma;
