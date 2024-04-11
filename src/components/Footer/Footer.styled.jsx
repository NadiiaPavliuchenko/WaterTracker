import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: auto;
  padding: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const Text = styled.p`
  color: #407bff;
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  margin: 10px 0;
  stroke: #407bff;
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-style: normal;
  color: #407bff;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const FrogBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wow {
    position: absolute;
    display: none;
    top: -70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    padding: 5px 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};

    border-radius: 10px;
    margin: 20px auto;
  }

  .wow::after {
    content: '';
    position: absolute;
    bottom: -19px;
    left: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.blue} transparent transparent
      transparent;
    transform: translateX(-50%);
  }

  &:hover {
    .wow {
      display: block;
    }
  }
`;
