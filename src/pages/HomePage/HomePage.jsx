import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <DailyNorma />
      <WaterRatioPanel />
      <TodayWaterList />
      <MonthStatsTable />
    </>
  );
};

export default HomePage;
