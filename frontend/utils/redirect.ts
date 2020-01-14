import { gql } from 'apollo-boost'
import Router from "next/router"
import initApollo from '~/config/init-apollo'
import { Path } from '~/config/path'
import { Role } from '~/generated/apollo-components'
import { NextPage } from '~/node_modules/next'
import { parseCookies } from '~/utils/with-apollo'


export const redirect = (context: any, target: string) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}

const GET_USER_ROLE = gql`
    query {
        me {
            role
        }
    }
`

export const restrict = (Page: NextPage<any>, allow: Role[]) => {
  const originalGetInitialProps = Page.getInitialProps
  let pageProps = {}

  Page.getInitialProps = async (ctx) => {
    if (originalGetInitialProps) {
      pageProps = await originalGetInitialProps(ctx)
    }

    const apolloClient = initApollo(
      {},
      { getToken: () => parseCookies(ctx.req).token },
    )

    try {
      const { data } = await apolloClient.query({ query: GET_USER_ROLE })

      if (!allow.includes(data.me.role as Role)) {
        redirect(ctx, Path.NOT_FOUND)
      }

      return {
        ...pageProps,
      }
    } catch (e) {
      console.log('error: ', e.graphQLErrors[0])
      redirect(ctx, Path.LOGIN)
    }
  }

  return Page
}

export const redirectUser = (Page: NextPage<any>, to: Path) => {
  const originalGetInitialProps = Page.getInitialProps
  let pageProps = {}

  Page.getInitialProps = async (ctx) => {
    if (originalGetInitialProps) {
      pageProps = await originalGetInitialProps(ctx)
    }

    const token = parseCookies(ctx.req).token

    if (token) {
      redirect(ctx, to)
    }

    return {
      ...pageProps,
    }
  }
  return Page
}
