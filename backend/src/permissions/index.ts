import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'

const rules = {
  everyone: rule()(() => true),
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
}

export const permissions = shield({
  Query: {
    users: rules.everyone,
    me: rules.isAuthenticatedUser,
  },
  Mutation: {
    login: rules.everyone,
    signup: rules.everyone
  }
})
