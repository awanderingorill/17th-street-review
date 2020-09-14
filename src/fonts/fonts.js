import { createGlobalStyle } from 'styled-components';

import ClearFaceWoff from './ClearFaceStd-Regular.woff';
import SouvenirWoff from "./Souvenir-Demi.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Clearface';
        src: local('Clearface'), local('Clearface'),
        url(${ClearFaceWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Souvenir';
        src: local('Souvenir'), local('Souvenir'),
        url(${SouvenirWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;