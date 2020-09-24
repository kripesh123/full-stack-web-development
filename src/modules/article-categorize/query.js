import { GraphQLList, GraphQLInt } from "graphql";
import { getAll, getByID, getByCategoryID } from "./resolvers";
import ArticleCategorizeTYpe from "./types";

export const articleCategorizes = {
    type: new GraphQLList(ArticleCategorizeTYpe),
    resolve: getAll
}

export const articleCategorizeById = {
    type: ArticleCategorizeTYpe,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getByID
}

export const articleCategorizeByCategoryId = {
    type: new GraphQLList(ArticleCategorizeTYpe),
    args: {
        categoryId: { type: GraphQLInt }
    },
    resolve: getByCategoryID
}