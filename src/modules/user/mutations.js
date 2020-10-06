import { UserType } from './types'
import { GraphQLString } from 'graphql'
import { create } from './resolvers'

export const userSignup = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },
        email: {
            name: 'email',
            type: GraphQLString
        },
        password: {
            name: 'password',
            type: GraphQLString
        }
    },
    resolve: create
}