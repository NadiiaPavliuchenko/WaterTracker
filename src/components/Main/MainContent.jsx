import { WaterConsumptionTracker } from "../WaterConsumptionTracker/WaterСonsumptionTracker";
import WhyDrinkWater from "../WhyDrinkWater/WhyDrinkWater";
import { WelcomePageStyles } from "./MainContent.styled";

export const MainContent = () => {
  return (
      <WelcomePageStyles>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </WelcomePageStyles>
  );
};