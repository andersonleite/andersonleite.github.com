import Intro from "../components/Intro";
import SidenavStyle from "./styles/SidenavStyle";
import MainStyle from "./styles/MainStyle";
import Links from "./Links";
import Info from "./Info";
import ThemeSwitch from "./ThemeSwitch";
import theme from "../components/colors"
import reset from "../components/reset"
import { PageTransition } from 'next-page-transitions'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${theme.grey_dark};
    color: ${theme.grey_light};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Inconsolata';
  }
  a {
    text-decoration: none;
    color: ${theme.green};
  }  
`;

const Layout = props => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: 'circular_std';
        src: url('/static/fonts/CircularStd-Book.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'circular_std-bold';
        src: url('/static/fonts/CircularStd-Bold.woff2') format('woff2');
        font-weight: bold;
      }
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Inconsolata Regular'), local('Inconsolata-Regular'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldKNThLqRwH-OJ1UHjlKGlW5qhExfHwNJU.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Inconsolata Regular'), local('Inconsolata-Regular'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldKNThLqRwH-OJ1UHjlKGlX5qhExfHwNJU.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Inconsolata Regular'), local('Inconsolata-Regular'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldKNThLqRwH-OJ1UHjlKGlZ5qhExfHw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Inconsolata Bold'), local('Inconsolata-Bold'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldXNThLqRwH-OJ1UHjlKGHiw71m5_zaDpwm80E.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Inconsolata Bold'), local('Inconsolata-Bold'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldXNThLqRwH-OJ1UHjlKGHiw71n5_zaDpwm80E.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Inconsolata Bold'), local('Inconsolata-Bold'), url(https://fonts.gstatic.com/s/inconsolata/v17/QldXNThLqRwH-OJ1UHjlKGHiw71p5_zaDpwm.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
    </style>
    <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 2s ease-out 2s;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 2s ease-out 2s;
          }
          .main:hover ~ .sidenav {
            opacity: 0.5;
            transition: opacity .3s ease-in;
          }
        `}</style>
    <GlobalStyle />

    <div className={`main`}>
      <PageTransition timeout={300} classNames="page-transition">
        <MainStyle key="al" >
          {props.children}
        </MainStyle>
      </PageTransition>
    </div>
    <SidenavStyle className={`sidenav`}>
      <Intro />
      <Links />
      {/*<ThemeSwitch />*/}
    </SidenavStyle>

  </>
)

export default Layout
