import CssBaseline from '@material-ui/core/CssBaseline'
import App from "next/app"
import React from "react"
import { ApolloProvider } from "react-apollo"
import withApollo from "../utils/with-apollo"

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

export default withApollo(MyApp)
