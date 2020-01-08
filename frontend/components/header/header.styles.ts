import {
  createStyles,
  Theme,
} from '@material-ui/core'

const lightColor = 'rgba(255, 255, 255, 0.7)'

export default (theme: Theme) => createStyles({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
})
