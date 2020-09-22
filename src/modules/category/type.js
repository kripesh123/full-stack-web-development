import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";

export const CategoryType = new GraphQLObjectType({
    name: 'category',
    description: 'Category Type',
    fields: () => ({
        id: { type: GraphQLInt},
        name: { type: GraphQLString},
        slug: { type: GraphQLString},
        description: { type: GraphQLString},
        isActive: { type: GraphQLBoolean},
        createdAt: { type: GraphQLString},
        updatedAt: { type: GraphQLString},
    })
})