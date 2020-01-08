import { NextPage } from 'next'

export default (Page: NextPage, allow: String[]) => {
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
