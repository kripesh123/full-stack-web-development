import { CategoryType } from "./type";
import { GraphQLString, GraphQLBoolean } from "graphql";
import { create } from "./resolvers";

export const cateoryCreate = {
    type: CategoryType,
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
        isActive: {
            name: 'isActive',
            type: GraphQLBoolean
        }
    },
    resolve: create

}