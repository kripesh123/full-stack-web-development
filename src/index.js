//Imports
import express from 'express'

// App Imports
import loadModules from './setup/load-modules'
import setupStartServer from './setup/start-server'
import upload from './setup/upload'
import setUpGraphql from './setup/graphql'

//Create Express Server
const server = express()

// Setup load Modules
loadModules(server)

// Graphql
setUpGraphql(server)

// Upload
upload(server)

// Start Server
setupStartServer(server)
