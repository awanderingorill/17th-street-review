import { createGlobalStyle } from 'styled-components';

// import ClearFaceWoff from "./ClearFaceStd-Regular.woff";
// import SouvenirWoff from "./Souvenir-Demi.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Clearface';
        src: local('Clearface'), local('Clearface'),
        url("./ClearFaceStd-Regular.woff") format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Souvenir';
        src: local('Souvenir'), local('Souvenir'),
        url("./Souvenir-Demi.woff") format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;