import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        background: #343334;
        font: 11px menlo;
        color: #fff;
      }
    `}</style>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </div>
)

export default Layout
