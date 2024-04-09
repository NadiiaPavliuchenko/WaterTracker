import { useEffect, useState } from 'react';
import {
  AddWaterBtn,
  Container,
  ProgressContainer,
  ControlPointRoundedIcon,
} from './WaterRatioPanel.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPercentage } from '../../store/water/waterSelectors';
import { getCurrentDayInfoThunk } from '../../store/water/waterOperations';
import sprite from '../../assets/sprite.svg';
import AddWaterModal from '../AddWaterModal/AddWaterModal';

const WaterRatioPanel = () => {
  const [openList, setOpenList] = useState(false);
  const progressPercentage = useSelector(getCurrentPercentage);

  const dispatch = useDispatch();

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
        <h3>Today</h3>
        <div className="box">
          <ProgressContainer>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="line-0">|</div>
                <div className="line-50">|</div>
                <div className="line-100">|</div>
                <div className="marker-0">0%</div>
                <div className="marker-50">50%</div>
                <div className="marker-100">100%</div>
                <div
                  className="indicator"
                  style={{
                    left: `${progress}%`,
                  }}
                >
                  <p className="progress-text">
                    {progressPercentage > 100
                      ? `${progressPercentage}%`
                      : `${progress}%`}
                  </p>
                </div>
              </div>
            </div>
          </ProgressContainer>

          <AddWaterBtn onClick={handleOpenClick}>
            <ControlPointRoundedIcon width="20px" height="20px">
              <use xlinkHref={`${sprite}#plus-circle`} />
            </ControlPointRoundedIcon>{' '}
            <p>Add Water</p>
          </AddWaterBtn>
        </div>
        {openList && (
          <AddWaterModal isModalOpen={openList} closeModal={handleCloseClick} />
        )}
      </Container>
    </>
  );
};

export default WaterRatioPanel;
