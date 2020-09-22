import { GraphQLList, GraphQLString } from 'graphql'

import { UserType, UserGenderType, UserLoginType } from './types'
import { getAll, getGenders, login } from './resolvers'

// All 
export const users = {
    type: new GraphQLList(UserType),
    resolve: getAll
}

// Genders
export const userGenders = {
    type: new GraphQLList(UserGenderType),
    resolve: getGenders
}

// Auth
export const userLogin ={
    type: UserLoginType,
    args: {
        email: {
            name: 'email',
            type: GraphQLString
        },

        password: {
            name: 'password',
            type: GraphQLString
        }
    },
    resolve: login
}