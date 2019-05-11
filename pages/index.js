import Layout from "../components/Layout";
import theme from "../components/colors"
import reset from "../components/reset"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    //font-family: 'radnika_next';
    //src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
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
    //font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
  }  
`;

const Index = () => (
  <div>
    <GlobalStyle />
    <Layout>

    </Layout>
  </div>
)

export default Index
