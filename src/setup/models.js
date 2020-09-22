// Imports
import Sequelize from 'sequelize'

// App Import 
import databaseConnection from './database'

const models = {
    User: databaseConnection.import('../modules/user/model'),
    Category: databaseConnection.import('../modules/category/model')
}

Object.keys(models).forEach(modelName => {
    if(models[modelName].associate) {
        models[modelName].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
