import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import LinearProgress from '@material-ui/core/LinearProgress'
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Error from '@material-ui/icons/Error'
import React, { useEffect } from 'react'
import useStyles from './error-redirect.styles'
import theme from './error-redirect.theme'

interface ErrorRedirectProps {
  buttonText: string
  statusCode: number
  subTitle?: string
  time: number,
  title: string
  onContinue: () => void
}

const ErrorRedirect: React.FC<ErrorRedirectProps> = ({
  buttonText,
  statusCode,
  subTitle,
  time,
  title,
  onContinue,
}) => {
  const classes = useStyles()

  useEffect(() => {
    const timeout = setTimeout(() => {
      onContinue()
    }, time)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <ThemeProvider theme={ theme }>
      <div className={ classes.root }>
        <Card className={ classes.card }>
          <Typography component='h6' variant='h6'>
            { statusCode }
          </Typography>
          <Error className={ classes.icon } />
          <Typography component='h4' variant='h4'>
            { title }
          </Typography>
          <Typography component='p'>
            { subTitle }
          </Typography>
          <Button
            className={ classes.button }
            href=''
            onClick={ onContinue }
            variant='contained'
          >
            { buttonText }
          </Button>
        </Card>
        <LinearProgress
          color='primary'
          variant='indeterminate'
        />
      </div>
    </ThemeProvider>
  )
}
export default ErrorRedirect
