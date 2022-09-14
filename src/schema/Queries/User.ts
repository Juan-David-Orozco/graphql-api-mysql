import { GraphQLID, GraphQLList, GraphQLInt } from 'graphql'
import { Users } from '../../entities/Users'
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await Users.find()
  },
}

export const GET_USER = {
  type: UserType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_: any, args: any) {
    const { id } = args
    return await Users.findOne({ where: {id: id} })
  },
}