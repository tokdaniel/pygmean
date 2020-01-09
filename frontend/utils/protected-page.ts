import { gql } from 'apollo-boost'
import initApollo from '~/config/init-apollo'
import { Role } from '~/generated/apollo-components'
import { NextPage } from '~/node_modules/next'
import redirect from '~/utils/redirect'
import { parseCookies } from '~/utils/with-apollo'
import paths from '~/config/paths'


const GET_USER_ROLE = gql`
    query {
        me {
            role
        }
    }
`

export default (Page: NextPage<any>, allow: Role[]) => {
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
        redirect(ctx, paths.NOT_FOUND)
      }

      return {
        ...pageProps,
      }
    } catch (e) {
      console.log('error: ', e.graphQLErrors[0])
      redirect(ctx, paths.LOGIN)
    }
  }

  return Page
}
