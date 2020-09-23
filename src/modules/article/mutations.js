// Imports
import { GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { ArticleType } from './types'
import { create, update, remove } from './resolvers'

// Article create
export const articleCreate = {
    type: ArticleType,
    args: {
        title: {
            name: 'title',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },

        body: {
            name: 'body',
            type: GraphQLString
        },

        image: {
            name: 'image',
            type: GraphQLString
        },

        type: {
            name: 'type',
            type: GraphQLInt
        },

        featured: {
            name: 'featured',
            type: GraphQLInt
        },

        isActive: {
            name: 'isActive',
            type: GraphQLBoolean
        }

    },
    resolve: create
}

// Article update
export const articleUpdate = {
    type: ArticleType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },
        title: {
            name: 'title',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },

        body: {
            name: 'body',
            type: GraphQLString
        },

        image: {
            name: 'image',
            type: GraphQLString
        },

        type: {
            name: 'type',
            type: GraphQLInt
        },

        featured: {
            name: 'featured',
            type: GraphQLInt
        },

        isActive: {
            name: 'isActive',
            type: GraphQLBoolean
        },

        userId: {
            name: 'userId',
            type: GraphQLInt
        },
    },
    resolve: update
}

// Article remove
export const articleRemove = {
    type: ArticleType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}