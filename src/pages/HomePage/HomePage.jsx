import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Calendar } from 'components/Calendar/Month/Month';
import WrapperBox from '../../components/Wrapper/Wrapper.styled';



const HomePage = () => {
  return (
    <WrapperBox> 
      <HomeSection>
          <div>
            <DailyNorma />
            <WaterRatioPanel />
          </div>
          <HomeStatistics>
            <TodayWaterList />
            <Calendar />
          </HomeStatistics>
      </HomeSection>
    </WrapperBox> 
  );
};

export default HomePage;
