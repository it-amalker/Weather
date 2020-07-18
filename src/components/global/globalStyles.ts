import { createGlobalStyle } from 'styled-components';

import kaushanScriptWoff2 from '../../assets/fonts/kaushan-script-regular.woff2';
import kaushanScriptWoff from '../../assets/fonts/kaushan-script-regular.woff';
import openSansWoff2 from '../../assets/fonts/open-sans-regular.woff2';
import openSansWoff from '../../assets/fonts/open-sans-regular.woff';
import openSansBoldWoff2 from '../../assets/fonts/open-sans-600.woff2';
import openSansBoldWoff from '../../assets/fonts/open-sans-600.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Kaushan Script';
    src: url(${kaushanScriptWoff2}) format('woff2'),
      url(${kaushanScriptWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansWoff2}) format('woff2'),
      url(${openSansWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBoldWoff2}) format('woff2'),
      url(${openSansBoldWoff}) format('woff');
    font-weight: 600;
    font-style: bold;
    font-display: swap;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
