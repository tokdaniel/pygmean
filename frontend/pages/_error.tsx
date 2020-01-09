import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import ErrorRedirect from '~/components/error-redirect'
import { NextPage } from '~/node_modules/next'
import { isBrowser } from '~/utils/is-browser'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))


const Error: NextPage<any> = ({ statusCode }) => {
  const router = useRouter()
  const handleRedirect = () => isBrowser && router.push('/')
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <ErrorRedirect
        time={ 3000 }
        title='Something went wrong.'
        subTitle='You are being redirected to the homepage.'
        statusCode={ statusCode }
        buttonText='Continue'
        onContinue={ handleRedirect }
      />
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
