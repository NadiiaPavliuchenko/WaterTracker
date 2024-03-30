import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 255, 0.5);
  z-index: 9999;
  font-size: 1.5rem;
`;

export const Bottle = styled.div`
  margin: auto;
  perspective: 25em;
  position: relative;
  width: 11em;
  height: 11em;

  .bottle__sides,
  .bottle__side {
    position: absolute;
    top: 50%;
    left: 0;
    transform-style: preserve-3d;
  }
  .bottle__sides {
    animation: spin 1s linear infinite;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotateZ(90deg) rotateX(-90deg);
  }
  .bottle__side {
    display: flex;
  }
  .bottle__side:nth-child(1) {
    transform: translateY(-50%) rotateX(0deg);
  }
  .bottle__side:nth-child(2) {
    transform: translateY(-50%) rotateX(36deg);
  }
  .bottle__side:nth-child(3) {
    transform: translateY(-50%) rotateX(72deg);
  }
  .bottle__side:nth-child(4) {
    transform: translateY(-50%) rotateX(108deg);
  }
  .bottle__side:nth-child(5) {
    transform: translateY(-50%) rotateX(144deg);
  }
  .bottle__side:nth-child(6) {
    transform: translateY(-50%) rotateX(180deg);
  }
  .bottle__side:nth-child(7) {
    transform: translateY(-50%) rotateX(216deg);
  }
  .bottle__side:nth-child(8) {
    transform: translateY(-50%) rotateX(252deg);
  }
  .bottle__side:nth-child(9) {
    transform: translateY(-50%) rotateX(288deg);
  }
  .bottle__side:nth-child(10) {
    transform: translateY(-50%) rotateX(324deg);
  }
  .bottle__side span {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: inline-block;
    width: 1.2ch;
  }
  .bottle__side span:nth-child(1) {
    transform: translateZ(2ch) rotateY(0deg) scaleY(1);
  }
  .bottle__side span:nth-child(2) {
    transform: translateZ(2ch) rotateY(0deg) scaleY(1);
  }
  .bottle__side span:nth-child(3) {
    transform: translateZ(2.25ch) rotateY(-30deg) scaleY(1);
  }
  .bottle__side span:nth-child(4) {
    transform: translateZ(2.75ch) rotateY(-30deg) scaleY(1.3);
  }
  .bottle__side span:nth-child(5) {
    transform: translateZ(3.25ch) rotateY(-30deg) scaleY(1.5);
  }
  .bottle__side span:nth-child(6) {
    transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
  }
  .bottle__side span:nth-child(7) {
    transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
  }
  .bottle__side span:nth-child(8) {
    transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
  }
  .bottle__side span:nth-child(9) {
    transform: translateZ(3.3ch) rotateY(15deg) scaleY(1.5);
  }
  .bottle__side span:nth-child(10) {
    transform: translateZ(3ch) rotateY(15deg) scaleY(1.4);
  }
  .bottle__side span:nth-child(11) {
    transform: translateZ(2.8ch) rotateY(0deg) scaleY(1.3);
  }
  .bottle__side span:nth-child(12) {
    transform: translateZ(2.8ch) rotateY(0deg) scaleY(1.3);
  }
  .bottle__side span:nth-child(13) {
    transform: translateZ(3ch) rotateY(-15deg) scaleY(1.4);
  }
  .bottle__side span:nth-child(14) {
    transform: translateZ(3.3ch) rotateY(-15deg) scaleY(1.5);
  }
  .bottle__side span:nth-child(15) {
    transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
  }
  .bottle__side span:nth-child(16) {
    transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
  }
  .bottle__side span:nth-child(17) {
    transform: translateZ(3.25ch) rotateY(15deg) scaleY(1.5);
  }

  @keyframes spin {
    from {
      transform: rotateZ(90deg) rotateX(-90deg);
    }
    to {
      transform: rotateZ(90deg) rotateX(-54deg);
    }
  }
`;
