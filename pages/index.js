import Layout from "../components/Layout";
import theme from "../components/colors"
import reset from "../components/reset"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
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

const Index = () => (
  <div>
    <GlobalStyle />
    <Layout />
  </div>
)

export default Index
