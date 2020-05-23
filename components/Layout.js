import Intro from "../_old/Intro";
import SidenavStyle from "./styles/SidenavStyle";
import MainStyle from "./styles/MainStyle";
import Links from "../_old/Links";
import Info from "../_old/Info";
import ThemeSwitch from "../_old/ThemeSwitch";
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
          <section>
            <div className="social-links">
              <a className="social-link" target="_blank" href="https://www.instagram.com/andersonleite/">
                <div className="social-link-name">Instagram</div>
                <div className="social-link-underline"></div>
              </a>
              <a className="social-link" target="_blank" href="https://twitter.com/anderson_leite">
                <div className="social-link-name">Twitter</div>
                <div className="social-link-underline"></div>
              </a>
              <a className="social-link" target="_blank" href="https://github.com/andersonleite">
                <div className="social-link-name">Github</div>
                <div className="social-link-underline"></div>
              </a>
            </div>
          {props.children}
          </section>
        </MainStyle>
      </PageTransition>
    </div>
  </>
)

export default Layout
