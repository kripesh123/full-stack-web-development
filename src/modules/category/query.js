import { GraphQLList, GraphQLString } from "graphql";
import { CategoryType } from "./type";
import { getAll, getBySlug } from "./resolvers";

// All Category
export const categories = {
    type: new GraphQLList(CategoryType),
    resolve: getAll
}

// Find by Slug
export const category = {
    type: CategoryType,
    args: {
        slug: {
            type: GraphQLString
        }
    },
    resolve: getBySlug
}