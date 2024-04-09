import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  margin: 56px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .front-end,
  .back-end {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }

  .front-end-title {
    margin-bottom: 24px;
    text-align: start;
  }

  .membersFront {
    align-items: flex-start;
  }

  .back-end-title {
    margin-bottom: 24px;
    text-align: end;
  }

  .membersBack {
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
