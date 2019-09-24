const { gql } = require('apollo-server')
const typeDefs = gql`
  """
  Kerhotalo querys
  """
  type Query { 
    test: Test
  }
  
  """
  Kerhotalo types
  """
  type Test {
      test: String
  }

  """
  Custom type for dates
  """
  scalar Date
`
module.exports = {
    typeDefs
};