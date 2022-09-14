import { GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInputObjectType } from 'graphql'
import { Users } from '../../entities/Users'
import { UserType } from "../typeDefs/User";
import { MessageType } from "../typeDefs/Message";
import bcrypt from 'bcryptjs'

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  async resolve(_: any, args: any) {
    const {name, username, password} = args
    const encryptPassword = await bcrypt.hash(password, 10)
    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptPassword
    })
    return { ...args, id: result.identifiers[0].id, password: encryptPassword }
  }
}

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(_: any, args: any) {
    const { id } = args
    const result = await Users.delete(id)
    console.log(result)
    if(result.affected === 1) return true
    return false
  },
}

export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
    input: {
      type: new GraphQLInputObjectType ({
        name: 'UserInput',
        fields: {
          name: {type: GraphQLString},
          username: {type: GraphQLString},
          oldPassword: {type: GraphQLString},
          newPassword: {type: GraphQLString},
        },
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const {name, username, newPassword, oldPassword} = input

    const userFound = await Users.findOne({ where: {id: id} })

    if(!userFound) return { success: false, message: "User not found" }

    const isMatch = await bcrypt.compare(oldPassword, userFound.password)

    if(!isMatch) return { success: false, message: "Invalid password" }

    const encryptNewPassword = await bcrypt.hash(newPassword, 10)

    const result = await Users.update({id}, {
      name: name,
      username: username,
      password: encryptNewPassword
    })

    if(result.affected === 0) return { success: false, message: "User not updated" }

    return { success: true, message: "User updated" }
  }
}