import { GraphQLList } from 'graphql'

import { UserType, UserGenderType } from './types'
import { getAll, getGenders } from './resolvers'

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