import { PrismaClient } from '@prisma/client'
import { ContextParameters } from 'graphql-yoga/dist/types'
const client = new PrismaClient()

export interface Context {
  client: PrismaClient
  request: any
}

export function createContext(request: ContextParameters) {
  return {
    ...request,
    client,
  }
}
