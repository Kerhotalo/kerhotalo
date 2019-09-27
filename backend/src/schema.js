const { gql } = require('apollo-server')
const typeDefs = gql`
  """
  Kerhotalo querys
  """
  type Query { 
    me: User,
    search(search: SearchInput): [Clubhouse]
  }
  
  """
  Kerhotalo Mutations
  """
  type Mutation {
    createUser(user: UserInput): User,
    login(user: LoginInput): User,
    createClubhouse(clubhouse: ClubhouseInput): Clubhouse
  }

  """
  Kerhotalo types
  """
  type User {
    _id: String,
    username: String!,
    email: String!,
    emailConfirmed: Boolean!,
    token: String
  }

  type Clubhouse {
    _id: String!,
    title: String!,
    description: String!,
    shortDescription: String!,
    address: String!,
    city: String!,
    contact: String!,
    price: Float,
    ageRestriction: String,
    levelRestriction: String,
    createdBy: User
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

  input ClubhouseInput {
    _id: String,
    title: String!,
    description: String!,
    shortDescription: String!,
    address: String!,
    city: String!,
    contact: String!,
    price: Float,
    ageRestriction: String,
    levelRestriction: String
  }

  input SearchInput {
    keywords: String!,
    city: String
  }

  """
  Custom type for dates
  """
  scalar Date
`
module.exports = {
    typeDefs
};