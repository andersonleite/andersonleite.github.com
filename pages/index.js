import Layout from "../components/Layout";
import Intro from "../components/Intro";
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
  
  /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
  
`;

const Index = () => (
  <div>
    <GlobalStyle />
    <Layout>
      <Intro/>
    </Layout>
  </div>
)

export default Index
