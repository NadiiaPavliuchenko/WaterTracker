import BottleAnimation from '../../components/Animation/BottleAnimation';
import { MainContent } from '../../components/Main/MainContent';
import { WrapperBox } from '../../components/Wrapper/Wrapper.styled';
import { BackgroundWrapper, Bubble, TurnOff } from './WelcomePage.styled';
import WavesAnimation from '../../components/Animation/WavesAnimation';
import BubblesAnimation from '../../components/Animation/BubblesAnimation';
import { useState } from 'react';

const WelcomePage = () => {
  const [onAnimation, setOnAnimation] = useState(true);

  const handleOnAnimation = () => {
    setOnAnimation(!onAnimation);
  };
  return (
    <>
      {onAnimation ? (
        <>
          <BottleAnimation />
          <WavesAnimation />
          <BubblesAnimation />
        </>
      ) : (
        <BackgroundWrapper>
          <Bubble></Bubble>
        </BackgroundWrapper>
      )}
      <WrapperBox>
        <MainContent />
        <TurnOff onClick={handleOnAnimation}>
          {onAnimation ? 'Turn off animation' : 'Turn on animation'}
        </TurnOff>
      </WrapperBox>
    </>
  );
};

export default WelcomePage;
