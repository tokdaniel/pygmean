const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules');

module.exports = withTM(withCSS({
  pageExtensions: ['tsx'],
  transpileModules: [
    '@mui-treasury/layout',
    '@mui-treasury/mockup'
  ]
}))
