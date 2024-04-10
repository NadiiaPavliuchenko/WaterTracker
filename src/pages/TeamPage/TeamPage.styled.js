import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.blue};
  text-align: center;
  margin: 32px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  span {
    color: ${({ theme }) => theme.color.skyBlue};
  }
  a {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue};
  }
  img {
    width: 128px;
    height: 128px;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }

  p {
    text-align: start;
  }

  .front-end,
  .back-end {
    width: 100%;
  }

  .front-end-title {
    margin-bottom: 12px;
    text-align: start;
  }

  .membersFront {
    align-items: flex-start;
  }

  .back-end-title {
    margin-bottom: 12px;
    text-align: end;
  }

  .membersBack {
    align-items: flex-end;
  }

  .member {
    display: block;
    width: 100%;
    padding: 8px 12px;

    border-radius: 8px;
    box-shadow: 4px 12px 12px 4px rgba(64, 123, 255, 0.3);
  }

  .img-container {
    flex: 0 0 128px;
    border: 1px solid ${({ theme }) => theme.color.blue};
    border-radius: 50%;
    overflow: hidden;
  }

  .desc-container {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    a {
      align-items: flex-start;
    }
  }
`;
