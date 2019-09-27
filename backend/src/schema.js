const { gql } = require('apollo-server')
const typeDefs = gql`
  """
  Kerhotalo querys
  """
  type Query { 
    me: User
  }
  
  """
  Kerhotalo Mutations
  """
  type Mutation {
    createUser(user: UserInput): User,
    login(user: LoginInput): User
  }

  """
  Kerhotalo types
  """
  type User {
    username: String!,
    email: String!,
    emailConfirmed: Boolean!,
    token: String
  }
  
  """
  Kerhotalo inputs
  """
  input UserInput {
    username: String!,
    password: String!,
    email: String!
  }

  input LoginInput {
    username: String!,
    password: String!
  }

  """
  Custom type for dates
  """
  scalar Date
`
module.exports = {
    typeDefs
};