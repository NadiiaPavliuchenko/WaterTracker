import { Svg } from './WavesAnimation.styled';

const WavesAnimation = () => {
  return (
    <>
      {' '}
      <Svg viewBox="0 24 150 28">
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="50" y="0" fill="rgba(158, 187, 255,1)" />

          <use href="#gentle-wave" x="50" y="5" fill="rgba(236,242,255,0.5)" />
        </g>
      </Svg>
    </>
  );
};

export default WavesAnimation;
