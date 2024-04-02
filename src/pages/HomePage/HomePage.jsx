import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Calendar } from 'components/Calendar/Month/Month';
import Wrapper from 'components/Wrapper/Wrapper';
import { HomeSection, HomeStatistics, BottleSection } from './HomePage.styled';



const HomePage = () => {
  return (
    <Wrapper> 
      <HomeSection>
          <BottleSection>
            <DailyNorma />
            <WaterRatioPanel />
          </BottleSection>
          <HomeStatistics>
            <TodayWaterList />
            <Calendar />
          </HomeStatistics>
      </HomeSection>
    </Wrapper> 
  );
};

export default HomePage;
