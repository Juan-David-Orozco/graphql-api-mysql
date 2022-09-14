import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql'

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  }
})