import Head from 'next/head'

const Layout = props => (
  <>
    <Head>
      <title>Anderson Leite — Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="description" content="Anderson Leite" />
    </Head>
    <div className={`main`}>
      {props.children}
    </div>
  </>
)

export default Layout
