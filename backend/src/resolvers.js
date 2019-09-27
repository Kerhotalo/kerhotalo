import {AuthenticationError} from 'apollo-server'
import {createUser, login} from './actions/userOperations'
const resolvers = {
  Query: {
    me: (obj, args, context) => {
      if(!context.user) {
        throw new AuthenticationError('must authenticate')
      } else {
        return context.user
      } 
    }
  },
  Mutation: {
    login: (obj, args, context) => login(args.user.username, args.user.password),
    createUser: (obj, args, context) => createUser(args)
  }
}

module.exports = {
    resolvers
}