import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './Queries/Greeting'

//Consulta raiz, mian
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING
  }
})

// Se requiere una Query base para comenzar a usar graphql
export const schema = new GraphQLSchema({
  query: RootQuery,
  //mutation: {}
})