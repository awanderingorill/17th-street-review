import { createGlobalStyle } from 'styled-components';

import InterWoff from "./Inter-Regular.woff";
import WindsorWoff from "./Windsor.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${InterWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Windsor';
        src: local('Windsor Demi'), local('Windsor Demi'),
        url(${WindsorWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;