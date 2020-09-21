// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import serverConfig from '../config/server.json'
import paramConfig from '../config/params.json'
import schema from './schema'
import authentication from './authentication'

export default function (server) {
    console.info('SETUP- Graphql.....')

    server.use(authentication)
    
    // API
    server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
        schema,
        graphiql: serverConfig.graphql.ide,
        pretty: serverConfig.graphql.pretty,
        context: {
            auth: {
                user: request.user,
                isAuthenticated: request.user && request.user.id > 0,
                isAdmin: request.user.role === paramConfig.user.roles.admin,
            }
        }
    })))
}