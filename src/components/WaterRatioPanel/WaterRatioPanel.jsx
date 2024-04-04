import TodayListModal from 'components/TodayListModal/TodayListModal';
import { useState } from 'react';
import {
  AddWaterBtn,
  Container,
  ProgressContainer,
} from './WaterRatioPanel.styled';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { useSelector } from 'react-redux';
import { getCurrentPercentage } from '../../store/water/waterSelectors';

const WaterRatioPanel = () => {
  const [openList, setOpenList] = useState(false);
  // const progressPercentage = useSelector(getCurrentPercentage);
  const progressPercentage = 70;

  console.log('progressPercentage :>> ', progressPercentage);
  const handleOpenClick = () => {
    setOpenList(true);
  };

  const handleCloseClick = () => {
    setOpenList(false);
  };
  const progress = progressPercentage > 100 ? 100 : progressPercentage;
  return (
    <Container>
      {/* Progress Bar */}
      <ProgressContainer>
        <h3>Today</h3>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              <p className="progress-text">
                {' '}
                {progressPercentage > 100
                  ? `${progressPercentage}%`
                  : `${progress}%`}
              </p>
            </div>
            <div className="marker-0">0%</div>
            <div className="marker-50">50%</div>
            <div className="marker-100">100%</div>
            <div
              className="indicator"
              style={{
                left: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      </ProgressContainer>

      {/* Add Water Button */}
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
