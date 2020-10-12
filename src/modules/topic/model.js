'use strict'

//Topics

module.exports = function(sequelize, DataTypes) {

    let Topic = sequelize.define('topics', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.INTEGER
        },
        featured: {
            type: DataTypes.INTEGER
        }
    })

    return Topic
}