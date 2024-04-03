import styled from 'styled-components';
// import { baseTheme } from './theme';

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  height: 816px;
  padding: 24px 12px;

  background-color: #fff;
  border-radius: 10px;

  z-index: 4;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`;

// Щоб прибрати стрілочки вгору та вниз у елементі <input type="number">, які дозволяють змінювати значення, ви можете використати CSS.
// Chrome, Safari, Edge, Opera
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

// Firefox
// input[type="number"] {
//   -moz-appearance: textfield;
// }
