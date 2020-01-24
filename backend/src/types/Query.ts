import { idArg, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.client.users.findOne({
          where: {
            id: userId,
          },
        })
      },
    })

    t.crud.users()
  }
})
