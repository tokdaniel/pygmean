import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import { ThemeProvider } from '@material-ui/core/styles'
import { NextPage } from 'next'
import React from 'react'
import Content from '~/components/content'
import Copyright from '~/components/copyright'
import Header from '~/components/header'
import Navigator from '~/components/navigator'
import { Role } from '~/generated/apollo-components'
import useStyles, { drawerWidth } from './admin.styles'
import theme from './admin.theme'
import { restrict } from '~/utils/redirect'

const AdminPage: NextPage = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className={ classes.root }>
        <CssBaseline />
        <nav className={ classes.drawer }>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={ { style: { width: drawerWidth } } }
              variant="temporary"
              open={ mobileOpen }
              onClose={ handleDrawerToggle }
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={ { style: { width: drawerWidth } } } />
          </Hidden>
        </nav>
        <div className={ classes.app }>
          <Header onDrawerToggle={ handleDrawerToggle } />
          <main className={ classes.main }>
            <Content />
          </main>
          <footer className={ classes.footer }>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default restrict(AdminPage, [Role.Admin])
