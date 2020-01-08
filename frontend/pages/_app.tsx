import CssBaseline from '@material-ui/core/CssBaseline'
import App, { AppInitialProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../utils/with-apollo'

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={ apolloClient }>
        <CssBaseline />
        <Component { ...pageProps } />
      </ApolloProvider>
    )
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let appProps: AppInitialProps = { pageProps: {}}

  if(Component.getInitialProps) {
    appProps.pageProps = await Component.getInitialProps(ctx);
  }

  return appProps
}

export default withApollo(MyApp)
