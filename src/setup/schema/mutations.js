import { GraphQLObjectType } from 'graphql'

import * as user from '../../modules/user/mutations'

const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'API Mutation {create, update, delete}',
    fields: {
        ...user
    }
})

export default mutation
