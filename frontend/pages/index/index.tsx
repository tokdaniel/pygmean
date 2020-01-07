import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { NextPage } from 'next'
import React from 'react'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${ theme.palette.divider }`,
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}))

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
]

const Blog: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Toolbar className={ classes.toolbar }>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={ classes.toolbarTitle }
          >
            Blog
          </Typography>
        </Toolbar>
        <main>
          {/* Main featured post */ }
          <Paper className={ classes.mainFeaturedPost }>
            {/* Increase the priority of the hero background image */ }
            {
              <img
                style={ { display: 'none' } }
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={ classes.overlay } />
            <Grid container>
              <Grid item md={ 6 }>
                <div className={ classes.mainFeaturedPostContent }>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers
                    quickly and efficiently about what&apos;s most interesting in this
                    post&apos;s contents.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */ }
          {/* Sub featured posts */ }
          <Grid container spacing={ 4 }>
            { featuredPosts.map(post => (
              <Grid item key={ post.title } xs={ 12 } md={ 6 }>
                <CardActionArea component="a" href="#">
                  <Card className={ classes.card }>
                    <div className={ classes.cardDetails }>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          { post.title }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          { post.date }
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          { post.description }
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={ classes.cardMedia }
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            )) }
          </Grid>
          {/* End sub featured posts */ }
        </main>
      </Container>
    </>
  )
}

export default Blog
