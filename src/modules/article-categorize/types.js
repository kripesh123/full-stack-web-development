import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import { CategoryType } from "../category/type";
import { ArticleType } from "../article/types";
import { SubCategoryType } from "../sub-category/types";

const ArticleCategorizeTYpe = new GraphQLObjectType({
    name: 'articleCategorize',
    description: 'Article Categorize Type',

    fields: () => ({
        id: { type: GraphQLInt},
        category: { type: CategoryType },
        article: { type: ArticleType },
        subCategory: { type: SubCategoryType },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default ArticleCategorizeTYpe