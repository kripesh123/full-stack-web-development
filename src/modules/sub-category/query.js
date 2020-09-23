import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import { SubCategoryType } from "./types";
import { getById, getAll, getByCategoryId } from "./resolvers";

export const subCategories = {
    type: new GraphQLList(SubCategoryType),
    args: {
        orderBy: { type: GraphQLString }
    },
    resolve: getAll
}

export const subCategoryById = {
    type: SubCategoryType,
    args: {
        subCategoryId: { type: GraphQLInt}
    },
    resolve: getById
}

export const subCategoryByCategoryId = {
    type: new GraphQLList(SubCategoryType),
    args: {
        categoryId: { type: GraphQLInt}
    },
    resolve: getByCategoryId
}