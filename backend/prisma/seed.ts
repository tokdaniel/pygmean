import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function main() {
  const user1 = await client.users.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      role: 'User',
    },
  })
  const user2 = await client.users.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43"
      role: 'Admin',
    },
  })
  console.log({ user1, user2 })
}

main().finally(async () => {
  await client.disconnect()
})
