import { WaterConsumptionTracker } from "../WaterConsumptionTracker/WaterСonsumptionTracker";
import WhyDrinkWater from "../WhyDrinkWater/WhyDrinkWater";
import { WrapperBox } from "../Wrapper/Wrapper.styled";
import { WelcomePageStyles } from "./MainContent.styled";

export const MainContent = () => {
  return (
    <WrapperBox>
      <WelcomePageStyles>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </WelcomePageStyles>
    </WrapperBox>
  );
};