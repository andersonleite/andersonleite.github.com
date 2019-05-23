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
    font-family: 'circular_std';
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
        `}</style>
    <GlobalStyle />
    <SidenavStyle>
      <Intro />
      <Links />
      <Info />
      <ThemeSwitch />
    </SidenavStyle>
    <PageTransition timeout={300} classNames="page-transition">

    <MainStyle key="al">
      {props.children}
    </MainStyle>
    </PageTransition>
  </>
)

export default Layout
