//App Imports
import { NODE_ENV, PORT } from '../config/env'

export default function (server) {
    console.info('SETUP- Starting Server...')

    server.listen(PORT, (error) => {
        if(error) {
            console.error('ERROR - Unable to start server')
        } else {
            console.info(`INFO - Server started on: ${ PORT } [${ NODE_ENV }]`)
        }
    })
}