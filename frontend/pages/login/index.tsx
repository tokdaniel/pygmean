import { useMutation } from '@apollo/react-hooks'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { gql } from 'apollo-boost'
import cookie from 'cookie'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Copyright from '~/components/copyright'
import { Path } from '~/config/path'
import { FormEvent } from '~/node_modules/@types/react'
import { NextPage } from '~/node_modules/next'
import { redirectUser } from '~/utils/redirect'
import useStyles from './sign-in.styles'

const LOGIN_MUTATION = gql`
    mutation($email: String!, $password: String!) {
        login(password: $password, email: $email) {
            token
        }
    }
`

const onSubmit = (handler: any) => (e: FormEvent) => {
  e.preventDefault()
  handler().catch(console.log)
}

const Login: NextPage = () => {
  const classes = useStyles()
  const router = useRouter()

  const [login, { data, error }] = useMutation(LOGIN_MUTATION)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (data) {
    document.cookie = cookie.serialize('token', data.login.token)
    router.push(Path.HOME)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={ classes.paper }>
        <Avatar className={ classes.avatar }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={ classes.form } noValidate
              onSubmit={ onSubmit(() => login({ variables: { email, password } })) }>
          <TextField
            error={ error?.graphQLErrors[0].message.includes('email') }
            helperText={ error?.graphQLErrors[0].message }
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            error={ error?.graphQLErrors[0].message.includes('password') }
            helperText={ error?.graphQLErrors[0].message }
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={ <Checkbox value="remember" color="primary" /> }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={ classes.submit }
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                { "Don't have an account? Sign Up" }
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={ 8 }>
        <Copyright />
      </Box>
    </Container>
  )
}

export default redirectUser(Login, Path.HOME)
