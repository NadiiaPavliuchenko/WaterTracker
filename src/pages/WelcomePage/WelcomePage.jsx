import { MainContent } from "../../components/Main/MainContent";
import { WrapperBox } from "../../components/Wrapper/Wrapper.styled";
import { BackgroundWrapper, Bubble } from "./WelcomePage.styled";


const WelcomePage = () => {
  return (
    <WrapperBox>
      <BackgroundWrapper>
        <Bubble>
         <MainContent />
        </Bubble>
      </BackgroundWrapper>
    </WrapperBox>
    
  );
};

export default WelcomePage;
