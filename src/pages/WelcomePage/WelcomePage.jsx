import BottleAnimation from '../../components/Animation/BottleAnimation';
import { MainContent } from '../../components/Main/MainContent';

import { BackgroundWrapper, Bubble, TurnOff } from './WelcomePage.styled';
import WavesAnimation from '../../components/Animation/WavesAnimation';
import BubblesAnimation from '../../components/Animation/BubblesAnimation';
import { useState } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';

const WelcomePage = () => {
  const [onAnimation, setOnAnimation] = useState(false);

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
      <Wrapper>
        <MainContent />
        <TurnOff onClick={handleOnAnimation}>
          {onAnimation ? 'Turn off animation' : 'Turn on animation'}
        </TurnOff>
      </Wrapper>
    </>
  );
};

export default WelcomePage;
