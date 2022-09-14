import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './Queries/Greeting'
import { CREATE_USER } from "./Mutations/User";

//Consulta raiz, mian
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER
  },
})

// Se requiere una Query base para comenzar a usar graphql
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})