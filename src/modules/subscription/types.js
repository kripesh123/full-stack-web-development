// Imports
import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

// App Imports
import { UserType } from '../user/types'
import { TopicType } from '../topic/types'

// Subscription Type
const SubscriptionType = new GraphQLObjectType({
    name: 'subscription',
    description: ' Subscription Type',

    fields: () => ({
        id: { type: GraphQLInt },
        user: { type: UserType },
        topic: { type: TopicType },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default SubscriptionType