import App, {Container} from 'next/app';
import {ApolloProvider} from 'react-apollo';
import withData from '../lib/withData';
import Loading from "../components/Loading";
import React from "react";

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return {pageProps};
  }

  render() {
    const {Component, apollo, pageProps} = this.props;

    return (
      <>
      {/*<Loading/>*/}
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
       </>
    );
  }
}

export default withData(MyApp);
