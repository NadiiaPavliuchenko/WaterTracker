import { MainContent } from "../../components/Main/MainContent";
import { WrapperBox } from "../../components/Wrapper/Wrapper.styled";
import { BackgroundWrapper, Bubble } from "./WelcomePage.styled";


const WelcomePage = () => {
  return (
    <BackgroundWrapper>
      <WrapperBox>
        <Bubble>
         <MainContent />
        </Bubble>
      </WrapperBox>
      </BackgroundWrapper>
  );
};

export default WelcomePage;
