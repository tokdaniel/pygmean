import { makeStyles } from '@material-ui/core'
import common from '@material-ui/core/colors/common'
import lightBlue from '@material-ui/core/colors/lightBlue'
import red from '@material-ui/core/colors/red'

export const cardWidth = 600

export default makeStyles(() => ({
  root: {
    width: cardWidth,
    maxWidth: '100%',
  },
  card: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0 40px',
  },
  icon: {
    color: red[500],
    fontSize: 50,
  },
  button: {
    background: lightBlue[500],
    color: common.white,
    '&:hover ': {
      background: lightBlue[700],
    },
    marginTop: 8,
  },
}))
