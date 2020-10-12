//Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const TopicType = new GraphQLObjectType({
    name: 'topic',
    description: 'Topic Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        type: { type: GraphQLInt },
        featured: { type: GraphQLInt },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

const TopicTypesType = new GraphQLObjectType({
    name: 'topicTypesType',
    description: 'Topic Types Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    })
})

const TopicFeaturedType = new GraphQLObjectType({
    name: 'topicFeaturedType',
    description: 'Topic Featured Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    })
})

export { TopicType, TopicTypesType, TopicFeaturedType }
