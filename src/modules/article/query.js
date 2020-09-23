// Imports
import { GraphQLString, GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql'

// App Imports
import { ArticleType, ArticleTypesType, ArticleFeaturedType } from './types'
import { getAll, getBySlug, getById, getByType, getByFeatured, getFurther, getByUser, getTypes, getFeatured } from './resolvers'

// Article All
export const articles = {
    type: new GraphQLList(ArticleType),
    resolve: getAll
}

// Article By slug
export const article = {
    type: ArticleType,
    args: {
        slug: { type: GraphQLString }
    },
    resolve: getBySlug
}

// Article By ID
export const articleById = {
    type: ArticleType,
    args: {
        articleId: { type: GraphQLInt }
    },
    resolve: getById
}

// Article By type
export const articlesByType = {
    type: new GraphQLList(ArticleType),
    args: {
        articleType: { type: GraphQLInt }
    },
    resolve: getByType
}
// Article By featured
export const articlesByFeatured = {
    type: new GraphQLList(ArticleType),
    args: {
        articleFeatured: { type: GraphQLInt }
    },
    resolve: getByFeatured
}

// Article Further
export const articlesFurther = {
    type: new GraphQLList(ArticleType),
    args: {
        articleId: { type: GraphQLInt }
    },
    resolve: getFurther
}

// Article By user
export const articlesByUser = {
    type: new GraphQLList(ArticleType),
    resolve: getByUser
}

// Article Types
export const articleTypes = {
    type: new GraphQLList(ArticleTypesType),
    resolve: getTypes
}

// Article Featured
export const articleFeaturedType = {
    type: new GraphQLList(ArticleFeaturedType),
    resolve: getFeatured
}