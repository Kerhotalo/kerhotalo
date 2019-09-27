import {AuthenticationError} from 'apollo-server'
import {createUser, login} from './actions/userOperations'
import {searchClubhouses} from './actions/searchOperations'
import {createClubhouse} from './actions/clubhouseOperations'

const resolvers = {
  Query: {
    me: (obj, args, context) => {
      if(!context.user) {
        throw new AuthenticationError('must authenticate')
      } else {
        return context.user
      } 
    },
    search: (obj, args, context) => {
      if(!context.user) {
        throw new AuthenticationError('must authenticate')
      } else {
        return searchClubhouses(args)
      } 
    }
  },
  Mutation: {
    login: (obj, args, context) => login(args.user.username, args.user.password),
    createUser: (obj, args, context) => createUser(args),
    createClubhouse: (obj, args, context) => {
      if(!context.user) {
        throw new AuthenticationError('must authenticate')
      } else {
        console.log(args)
        return createClubhouse(args, context.user)
      } 
    }
  }
}

module.exports = {
    resolvers
}