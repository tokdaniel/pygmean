import { NextPage } from 'next'
import { Role } from '~/generated/apollo-components'

export default (Page: NextPage, allow: Role[]) => {
  const originalGetInitialProps = Page.getInitialProps

  Page.getInitialProps = async (ctx) => {
    let pageProps = {}

    if(originalGetInitialProps) {
      pageProps = await originalGetInitialProps(ctx);
    }

    return {
      ...pageProps,
      protected: true,
      allow
    }
  }

  return Page
}
