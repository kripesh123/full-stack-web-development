import { GraphQLObjectType } from 'graphql'

import * as user from '../../modules/user/query'

const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries {read}',
    fields: {
        ...user
    }
})

export default query
