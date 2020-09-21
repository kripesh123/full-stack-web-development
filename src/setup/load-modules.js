// Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

//App Imports
import { NODE_ENV } from '../config/env'

//Load express modules
export default function (server) {
    console.info('SETUP- Loading Modules.....')

    //Enables CORS
    server.use(cors());

    //Request body Parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false}))

    //Request cookie parser
    server.use(cookieParser())

    //Static file folder
    server.use(express.static(path.join(__dirname, '..', '..', 'public')))

    // HTTP Logger
    if ( NODE_ENV === 'development') {
        server.use(morgan('tiny'))
    }
}




