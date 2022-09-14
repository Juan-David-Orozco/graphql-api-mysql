import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './Queries/Greeting'
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { GET_ALL_USERS, GET_USER } from './Queries/User'

//Consulta raiz, mian
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER
  },
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    upadateUser: UPDATE_USER
  },
})

// Se requiere una Query base para comenzar a usar graphql
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})