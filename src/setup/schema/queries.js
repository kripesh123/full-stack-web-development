import { GraphQLObjectType } from 'graphql'

import * as user from '../../modules/user/query'
import * as category from '../../modules/category/query'

const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries {read}',
    fields: {
        ...user,
        ...category
    }
})

export default query
