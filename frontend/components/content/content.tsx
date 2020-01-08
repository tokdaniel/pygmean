import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import {
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import RefreshIcon from '@material-ui/icons/Refresh'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import styles from './content.styles';


export interface ContentProps extends WithStyles<typeof styles> {
}

function Content(props: ContentProps) {
  const { classes } = props

  return (
    <Paper className={ classes.paper }>
      <AppBar className={ classes.searchBar } position="static" color="default" elevation={ 0 }>
        <Toolbar>
          <Grid container spacing={ 2 } alignItems="center">
            <Grid item>
              <SearchIcon className={ classes.block } color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={ {
                  disableUnderline: true,
                  className: classes.searchInput,
                } }
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={ classes.addUser }>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={ classes.block } color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={ classes.contentWrapper }>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Content)
