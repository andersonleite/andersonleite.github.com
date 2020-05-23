import Document from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    // const sheet = new ServerStyleSheet()
    // const originalRenderPage = ctx.renderPage

    // try {
    //   ctx.renderPage = () =>
    //     originalRenderPage()
    //
    //   const initialProps = await Document.getInitialProps(ctx)
    //   return {
    //     ...initialProps,
    //     styles: (
    //       <>
    //         {initialProps.styles}
    //         {sheet.getStyleElement()}
    //       </>
    //     )
    //   }
    // } finally {
    //   sheet.seal()
    // }
  }
}
