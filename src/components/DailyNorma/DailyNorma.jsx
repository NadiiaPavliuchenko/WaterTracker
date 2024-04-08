import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { useEffect, useState } from 'react';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';
import {
  ModalDaily,
  DailyTitle,
  DailyBtn,
  DailyLitr,
  DailyEditContainer,
  StyledBottleImage
} from './DailyNorma.styled';
import { fetchUserData } from '../../store/auth/authOperations';
import bottle_desk_1x from '../../assets/images/background/RegisterLoginPage/Desk/bottle_desk_1x.png' 

  const DailyNorma = () => {
  const { dailyWaterGoal } = useSelector(getCurrentUser);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Перетворення мл у л
  const dailyWaterGoalL = (dailyWaterGoal / 1000).toFixed(1) + ' L';

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <ModalDaily>
      <DailyTitle>My daily norma: </DailyTitle>
      <DailyEditContainer>
        <DailyLitr>{dailyWaterGoalL}</DailyLitr>
        <DailyBtn onClick={openModal}>Edit</DailyBtn>
      </DailyEditContainer>
      <DailyNormaModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <StyledBottleImage img src={bottle_desk_1x} alt="Bottle" /> 
    </ModalDaily>
  );
};

export default DailyNorma;
