// Imports
import { GraphQLList } from "graphql";

// App Imports
import SubscriptionType from "./types";
import { getByUser } from "./resolvers";

// Subscriptions by user
export const subscriptionsByUser = {
    type: new GraphQLList(SubscriptionType),
    resolve: getByUser
}