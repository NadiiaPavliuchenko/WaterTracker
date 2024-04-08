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
  StyledBottleImage,
  DailySection,
} from './DailyNorma.styled';
import { fetchUserData } from '../../store/auth/authOperations';
import bottleImage_mob_1x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_1x.png';
import bottleImage_mob_2x from '../../assets/images/background/RegisterLoginPage/mob/bottle_mob_2x.png';
import bottleImage_tab_1x from '../../assets/images/background/home/bottle_tab.png';
import bottleImage_tab_2x from '../../assets/images/background/home/bottle_tab_2x.png';
import bottleImage_desk_1x from '../../assets/images/background/home/bottle_desk.png';
import bottleImage_desk_2x from '../../assets/images/background/home/bottle_desk_2x.png';

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
    <DailySection>
      <ModalDaily>
        <DailyTitle>My daily norma: </DailyTitle>
        <DailyEditContainer>
          <DailyLitr>{dailyWaterGoalL}</DailyLitr>
          <DailyBtn onClick={openModal}>Edit</DailyBtn>
        </DailyEditContainer>
        <DailyNormaModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </ModalDaily>
      <picture className="bottle">
        <source
          srcSet={`${bottleImage_desk_1x} 1x, ${bottleImage_desk_2x} 2x`}
          media="(min-width: 1440px)"
          type="image/png"
        />
        <source
          srcSet={`${bottleImage_tab_1x} 1x, ${bottleImage_tab_2x} 2x`}
          media="(min-width: 768px)"
          type="image/png"
        />
        <source
          srcSet={`${bottleImage_mob_1x} 1x, ${bottleImage_mob_2x} 2x`}
          media="(min-width: 320px)"
          type="image/png"
        />
        <StyledBottleImage
          className="bottle"
          alt="bottle of water"
          src={bottleImage_mob_1x}
        ></StyledBottleImage>
      </picture>
    </DailySection>
  );
};

export default DailyNorma;
