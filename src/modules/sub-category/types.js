import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from "graphql";
import { CategoryType } from "../category/type";

const SubCategoryType = new GraphQLObjectType({
    name: 'subcategory',
    description:  'Sub Category Type',

    fields: () => ({
        id: { type: GraphQLInt},
        name: { type: GraphQLString},
        slug: { type: GraphQLString},
        description: { type: GraphQLString},
        category: { type: CategoryType},
        isActive: { type: GraphQLBoolean},
        createdAt: { type: GraphQLString},
        updatedAt: { type: GraphQLString}, 
    })
})

export { SubCategoryType }