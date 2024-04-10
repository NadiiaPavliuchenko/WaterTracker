import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Calendar } from 'components/Calendar/Month/Month';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  HomeSection,
  HomeStatistics,
  BottleSection,
  HomeWrapper,
  BlueFrame,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <HomeSection>
          <BottleSection>
            <DailyNorma />
            <WaterRatioPanel />
          </BottleSection>
          <HomeStatistics>
            <BlueFrame>
              <TodayWaterList />
              <Calendar />
            </BlueFrame>
          </HomeStatistics>
        </HomeSection>
      </HomeWrapper>
    </Wrapper>
  );
};

export default HomePage;
