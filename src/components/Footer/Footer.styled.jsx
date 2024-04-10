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
