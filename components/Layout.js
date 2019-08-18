import Intro from "../components/Intro";
import SidenavStyle from "./styles/SidenavStyle";
import MainStyle from "./styles/MainStyle";
import Links from "./Links";
import Info from "./Info";
import ThemeSwitch from "./ThemeSwitch";
import theme from "../components/colors"
import reset from "../components/reset"
import { PageTransition } from 'next-page-transitions'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: sans-serif;
    background: ${theme.grey_dark};
    overflow: initial;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: ${theme.grey_light};
    background: ${theme.grey_dark};
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.green};
  }  
`;

const Layout = props => (
  <>
    <Head>
      <title>Anderson Leite — Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="description" content="Anderson Leite" />
    </Head>
    <GlobalStyle />
    <div className={`main`}>
      <PageTransition timeout={300} classNames="page-transition">
        <MainStyle key="al" >
          {props.children}
        </MainStyle>
      </PageTransition>
    </div>
  </>
)

export default Layout
