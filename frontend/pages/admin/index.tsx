import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import {
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { NextPage } from 'next'
import React from 'react'
import Content from '../../components/content'
import Header from '../../components/header'
import Navigator from '../../components/navigator'
import styles, { drawerWidth } from './admin.styles'
import theme from './admin.theme'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      { 'Copyright © ' }
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{ ' ' }
      { new Date().getFullYear() }
      { '.' }
    </Typography>
  )
}

export interface PaperbaseProps extends WithStyles<typeof styles> {
}

const  AdminPage: NextPage<PaperbaseProps> = (props: PaperbaseProps) => {
  const { classes } = props
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

export default withStyles(styles)(AdminPage)
