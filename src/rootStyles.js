import { createGlobalStyle } from 'styled-components';

import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto-Regular';
        font-weight: 400;
        font-style: normal;
        src: url(${RobotoRegular}) format('truetype'),
    }
    @font-face {
        font-family: 'Roboto-Medium';
        font-weight: 500;
        font-style: normal;
        src: url(${RobotoMedium}) format('truetype'),
    }
    @font-face {
        font-family: 'Roboto-Bold';
        font-weight: 700;
        font-style: normal;
        src: url(${RobotoBold}) format('truetype'),
    }

    body {
        background-color: ${({ theme }) => theme.color.white};
        font-family: var(--roboto-regular);
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.color.black};
        width: 100%;
        height: 100vh;
        margin: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    img {
        display: block;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
