import { GraphQLServer } from 'graphql-yoga'
import { createContext } from './context'
import { permissions } from './permissions'
import { schema } from './schema'

const server = new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
})

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000'], // your frontend url.
  },
}


server.start(opts, () =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️`,
  ),
)
