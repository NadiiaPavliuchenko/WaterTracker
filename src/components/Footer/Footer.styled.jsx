import styled from 'styled-components';

// export const ContainerFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 12px;
// `;

// export const Icon = styled.svg`
//   width: 48px;
//   height: 48px;
// `;

// export const Text = styled.div`
//   color: ${({ theme }) => theme.color.black};
// `;

import { Link } from 'react-router-dom';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
