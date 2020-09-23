// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// Article type
const ArticleType = new GraphQLObjectType({
    name: 'article',
    description: 'Article Type',

    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        slug: { type: GraphQLString },
        description: { type: GraphQLString },
        body: { type: GraphQLString },
        image: { type: GraphQLString },
        type: { type: GraphQLInt },
        featured: { type: GraphQLInt },
        user: { type: UserType },
        isActive: { type: GraphQLBoolean },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

// Article Types type
const ArticleTypesType = new GraphQLObjectType({
    name: 'articleTypesType',
    description: 'Article Types Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
})

// Article featured type
const ArticleFeaturedType = new GraphQLObjectType({
    name: 'articleFeaturedType',
    description: 'Article Featured Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
})


export { ArticleType, ArticleTypesType, ArticleFeaturedType }