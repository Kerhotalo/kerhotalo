import {AuthenticationError} from 'apollo-server'

const resolvers = {
    Query: {

      test: (obj, args, context) => {
        if(!context.user) {
          //throw new AuthenticationError('must authenticate')
        }
        return { test: 'ok' }
      }
  }
}

module.exports = {
    resolvers
}