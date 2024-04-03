import { MainContent } from "../../components/Main/MainContent";
import { WrapperBox } from "../../components/Wrapper/Wrapper.styled";
import { BackgroundWrapper, Bubble } from "./WelcomePage.styled";


const WelcomePage = () => {
  return (
    <BackgroundWrapper>
      <Bubble>
        <WrapperBox>
         <MainContent />
        </WrapperBox>
      </Bubble>
      </BackgroundWrapper>
  );
};

export default WelcomePage;
