import { SubCategoryType } from "./types";
import { GraphQLString, GraphQLBoolean, GraphQLInt } from "graphql";
import { create } from "./resolvers";

export const subCategoryCreate = {
    type: SubCategoryType,
    args: {
        name: {
            name: 'name',
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
        categoryId: {
            name: 'categoryId',
            type: GraphQLInt
        },
        isActive: {
            name: 'isActive',
            type: GraphQLBoolean
        }
    },
    resolve: create
}