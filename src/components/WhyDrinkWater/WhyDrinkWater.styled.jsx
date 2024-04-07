import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  /* color: #2f2f2f; */
  margin-bottom: 12px;
`;

export const Item = styled.li`
  font-size: 16px;
  /* color: #2f2f2f; */
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.blue};
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`;
export const OutlineContainer = styled.div`
  display: block;
  margin: 0;
  /* @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 40px;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 280px;

  padding: 24px 16px;
  background-color: ${({ theme }) => theme.color.lavender};
  box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
  border-radius: 10px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
