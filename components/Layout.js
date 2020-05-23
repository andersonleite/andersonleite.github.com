import { PageTransition } from 'next-page-transitions'
import Head from 'next/head'

const Layout = props => (
  <>
    <Head>
      <title>Anderson Leite — Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="description" content="Anderson Leite" />
    </Head>
    <div className={`main`}>
      <PageTransition timeout={300} classNames="page-transition">
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
      </PageTransition>
    </div>
  </>
)

export default Layout
