import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: 24px auto;
`;

export const Container = styled.div`
  .members {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
  }

  .member {
    width: 300px;
  }

  .member > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .img-container {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .desc-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.color.black};
  }

  .bubble {
    background: linear-gradient(
      ${({ theme }) => theme.color.skyBlue},
      ${({ theme }) => theme.color.blue}
    );
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:before,
  .bubble:after {
    content: '';
    background: linear-gradient(
      ${({ theme }) => theme.color.skyBlue},
      ${({ theme }) => theme.color.blue}
    );
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:nth-child(1) {
    top: 15vh;
    left: 15vw;
    height: 22vmin;
    width: 22vmin;
  }
  .bubble:nth-child(1):before {
    width: 13vmin;
    height: 13vmin;
    bottom: -25vh;
    right: -10vmin;
  }
  .bubble:nth-child(2) {
    top: 20vh;
    left: 38vw;
    height: 10vmin;
    width: 10vmin;
  }
  .bubble:nth-child(2):before {
    width: 5vmin;
    height: 5vmin;
    bottom: -10vh;
    left: -8vmin;
  }
  .bubble:nth-child(3) {
    top: 12vh;
    right: 30vw;
    height: 13vmin;
    width: 13vmin;
  }
  .bubble:nth-child(3):before {
    width: 3vmin;
    height: 3vmin;
    bottom: -15vh;
    left: -18vmin;
    z-index: 6;
  }
  .bubble:nth-child(4) {
    top: 25vh;
    right: 18vw;
    height: 18vmin;
    width: 18vmin;
  }
  .bubble:nth-child(4):before {
    width: 7vmin;
    height: 7vmin;
    bottom: -10vmin;
    left: -15vmin;
  }
  .bubble:nth-child(5) {
    top: 60vh;
    right: 18vw;
    height: 28vmin;
    width: 28vmin;
  }
  .bubble:nth-child(5):before {
    width: 10vmin;
    height: 10vmin;
    bottom: 5vmin;
    left: -25vmin;
  }
`;
