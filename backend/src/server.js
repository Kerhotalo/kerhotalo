import { ApolloServer, gql } from 'apollo-server'
import jwt from 'jsonwebtoken'
import util from 'util'
import mongoose from 'mongoose'
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const bearerToken = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null
    if (bearerToken) {
        const payload = await util.promisify(jwt.verify)(bearerToken, process.env.PROFILE_JWT_SECRET)
        return { user: payload.user }
    }
    return null
  } 
})

// TODO: Mongo connection here

server.listen().then(({ url }) => {
    console.log(`Kerhotalo Server ready at ${url}`)
})