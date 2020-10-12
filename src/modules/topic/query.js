// Imports
import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";

// App Imports
import { TopicType, TopicTypesType, TopicFeaturedType } from "./types";
import { getAll, getById, getTypes, getFeatured } from "./resolvers";


// Topic Get All
export const topics = {
    type: new GraphQLList(TopicType),
    args: {
        orderBy: { type: GraphQLString }
    },
    resolve: getAll
}

// Topic Ger By ID
export const topicById = {
    type: TopicType,
    args: {
        topicId: { type: GraphQLInt }
    },
    resolve: getById
}


// Topic Types
export const topicTypes = {
    type: new GraphQLList(TopicTypesType),
    resolve: getTypes
}

// Topic Featured
export const topicFeaturedTypes = {
    type: new GraphQLList(TopicFeaturedType),
    resolve: getFeatured
}