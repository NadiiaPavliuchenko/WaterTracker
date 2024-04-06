import TodayListModal from 'components/TodayListModal/TodayListModal';
import { useEffect, useState } from 'react';
import {
  AddWaterBtn,
  Container,
  ProgressContainer,
} from './WaterRatioPanel.styled';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPercentage } from '../../store/water/waterSelectors';
import { getCurrentDayInfoThunk } from '../../store/water/waterOperations';

const WaterRatioPanel = () => {
  const [openList, setOpenList] = useState(false);
  const progressPercentage = useSelector(getCurrentPercentage);
  const dispatch = useDispatch();

  // const progressPercentage = 80;

  const handleOpenClick = () => {
    setOpenList(true);
  };

  const handleCloseClick = () => {
    setOpenList(false);
  };
  const progress = progressPercentage > 100 ? 100 : progressPercentage;

  useEffect(() => {
    dispatch(getCurrentDayInfoThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        {/* Progress Bar */}
        <h3>Today</h3>
        <div className="box">
          <ProgressContainer>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="marker-0">0%</div>
                <div className="marker-50">50%</div>
                <div className="marker-100">100%</div>
                <div
                  className="indicator"
                  style={{
                    left: `${progress}%`,
                  }}
                >
                  {' '}
                  <p className="progress-text">
                    {progressPercentage > 100
                      ? `${progressPercentage}%`
                      : `${progress}%`}
                  </p>
                </div>
              </div>
            </div>
          </ProgressContainer>

          {/* Add Water Button */}
          <AddWaterBtn onClick={handleOpenClick}>
            <ControlPointRoundedIcon
              sx={{
                fill: 'var(--primary-white)',
                width: '24px',
                height: '24px',
              }}
            />{' '}
            <p>Add Water</p>
          </AddWaterBtn>
        </div>
        {openList && (
          <TodayListModal
            isModalOpen={openList}
            closeModal={handleCloseClick}
          />
        )}
      </Container>
    </>
  );
};

export default WaterRatioPanel;
