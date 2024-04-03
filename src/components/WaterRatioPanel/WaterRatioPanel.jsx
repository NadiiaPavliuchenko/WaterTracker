import TodayListModal from 'components/TodayListModal/TodayListModal';
import { useState } from 'react';
import {
  AddWaterBtn,
  Container,
  ProgressContainer,
} from './WaterRatioPanel.styled';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const WaterRatioPanel = () => {
  const [openList, setOpenList] = useState(false);

  const handleOpenClick = () => {
    setOpenList(true);
  };

  const handleCloseClick = () => {
    setOpenList(false);
  };

  return (
    <Container>
      <ProgressContainer>
        <p>Title</p>
        <progress value="0" min="0" step="1" max="100" />
      </ProgressContainer>

      <AddWaterBtn onClick={handleOpenClick}>
        <ControlPointRoundedIcon
          sx={{ fill: 'var(--primary-white)', width: '24px', height: '24px' }}
        />{' '}
        <p>Add Water</p>
      </AddWaterBtn>
      {openList && (
        <TodayListModal isModalOpen={openList} closeModal={handleCloseClick} />
      )}
    </Container>
  );
};

export default WaterRatioPanel;
