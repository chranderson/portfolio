import { createGlobalStyle } from 'styled-components';
import type { Theme } from 'styles/themes';
import { SIZE } from './mediaQueries';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  html {
    overflow: hidden;
    background: ${({ theme }) => theme.bg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    

    * {
      box-sizing: border-box;
    }
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    /* set system font for optimized performance and design  ~ gotta build trust with the users */
    /* font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif; */
    


    /* set system font for optimized performance and design  ~ gotta build trust with the users */
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

    /* for high res screens only */
    @media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx) {
      -moz-osz-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
  }

  #root {
    height: inherit;
  }


  h1 {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 1.1rem;
  }


  @media ${SIZE.MD} {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

`;

export default GlobalStyles;
