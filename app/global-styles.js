import { createGlobalStyle } from 'styled-components';
import { appBgColor } from 'variables';
import gothamMediumRegular from 'fonts/Gotham Medium Regular.ttf';
import gothamBlack from 'fonts/Gotham-Black.otf';
import gothamBlackItalic from 'fonts/Gotham-BlackItalic.otf';
import gothamBold from 'fonts/Gotham-Bold.otf';
import gothamBook from 'fonts/Gotham-Book.otf';
import gothamExtraLight from 'fonts/Gotham-ExtraLight.otf';
import gothamLight from 'fonts/Gotham-Light.otf';
import gothamMedium from 'fonts/Gotham-Medium.otf';
import gothamThin from 'fonts/Gotham-Thin.otf';
import gothamUltra from 'fonts/Gotham-Ultra.otf';
import Florsn39 from 'fonts/Florence San SC/Florsn39.ttf';
import Florsn40 from 'fonts/Florence San SC/Florsn40.ttf';
import Florsn43 from 'fonts/Florence San SC/Florsn43.ttf';
import Florsn44 from 'fonts/Florence San SC/Florsn44.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gotham Medium Regular';
    src: url(${gothamMediumRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Black';
    src: url(${gothamBlack}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-BlackItalic';
    src: url(${gothamBlackItalic}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Bold';
    src: url(${gothamBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Book';
    src: url(${gothamBook}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-ExtraLight';
    src: url(${gothamExtraLight}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Light';
    src: url(${gothamLight}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Medium';
    src: url(${gothamMedium}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Thin';
    src: url(${gothamThin}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Ultra';
    src: url(${gothamUltra}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Florsn39';
    src: url(${Florsn39}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Florsn40';
    src: url(${Florsn40}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Florsn43';
    src: url(${Florsn43}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Florsn44';
    src: url(${Florsn44}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: Gotham-Light;
    font-size: ${props => `calc(${props.minFontSize}px + (${props.maxFontSize} - ${props.minFontSize}) * ((100vw - ${props.minVw}px) / (${props.maxVw} - ${props.minVw})))`};
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body.fontLoaded {
    font-family: Gotham-Light;
  }

  #app {
    background-color: ${appBgColor};
    min-height: 100%;
    min-width: 100%;
  }

  h1 {
    font-family: Gotham-Bold;
    margin: 0px;
    font-size: 3rem;
  }

  h2 {
    font-family: Gotham-Bold;
    margin: 0px;
    font-size: 2rem;
  }

  h3 {
    font-family: Gotham-Bold;
    margin: 0px;
    font-size: 1.5rem;
  }

  h4 {
    font-family: Gotham-Light;
    font-size: 1em;
    margin: 0px;
  }

  button {
    font-family: Gotham-Light;
  }

  p,
  label {
    line-height: 2rem;
  }

  p,
  label {
    font-size: 0.875rem;
    font-family: 'Gotham-Light';
  }
`;

export default GlobalStyle;
