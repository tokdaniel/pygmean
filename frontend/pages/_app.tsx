import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import MenuIcon from '@material-ui/icons/Menu'
import {
  CollapseBtn,
  Content,
  Footer,
  Header,
  Root,
  Sidebar,
  SidebarTrigger,
} from '@mui-treasury/layout'
import {
  ContentMockUp,
  FooterMockUp,
  HeaderMockUp,
  NavContentMockUp,
  NavHeaderMockUp,
} from '@mui-treasury/mockup/layout'
import App from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '~/utils/with-apollo'

const baseTheme = createMuiTheme({})


const config = {
  "autoCollapseDisabled": false,
  "collapsedBreakpoint": "sm",
  "heightAdjustmentDisabled": false,
  "xs": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "persistent",
      "width": 240,
      "collapsible": true,
      "collapsedWidth": 64,
    },
    "header": {
      "position": "sticky",
      "clipped": true,
      "offsetHeight": 56,
      "persistentBehavior": "flexible",
    },
    "content": {
      "persistentBehavior": "flexible",
    },
    "footer": {
      "persistentBehavior": "flexible",
    },
  },
  "sm": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "persistent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64,
    },
    "header": {
      "position": "sticky",
      "clipped": true,
      "offsetHeight": 64,
      "persistentBehavior": "flexible",
    },
    "content": {
      "persistentBehavior": "flexible",
    },
    "footer": {
      "persistentBehavior": "flexible",
    },
  },
  "md": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "persistent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64,
    },
    "header": {
      "position": "sticky",
      "clipped": true,
      "offsetHeight": 64,
      "persistentBehavior": "flexible",
    },
    "content": {
      "persistentBehavior": "flexible",
    },
    "footer": {
      "persistentBehavior": "flexible",
    },
  },
}

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={ apolloClient }>
        <CssBaseline />
        <ThemeProvider theme={ baseTheme }>
          <Root config={ config }>
            { ({ headerStyles, sidebarStyles, collapsed, opened }: any) => (
              <>
                <CssBaseline />
                <Header>
                  <Toolbar>
                    <SidebarTrigger className={ headerStyles.leftTrigger }>
                      { opened ? <ArrowBackIcon /> : <MenuIcon /> }
                    </SidebarTrigger>
                    <HeaderMockUp />
                  </Toolbar>
                </Header>
                <Sidebar>
                  <NavHeaderMockUp collapsed={ collapsed } />
                  <div className={ sidebarStyles.container }>
                    <NavContentMockUp />
                  </div>
                  <CollapseBtn className={ sidebarStyles.collapseBtn }>
                    { collapsed ? <ArrowForwardIcon /> : <ArrowBackIcon /> }
                  </CollapseBtn>
                </Sidebar>
                <Content>
                  <ContentMockUp />
                  <Component { ...pageProps } />
                </Content>
                <Footer>
                  <FooterMockUp />
                </Footer>
              </>
            ) }
          </Root>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
