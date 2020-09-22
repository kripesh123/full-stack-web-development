'use strict'

module.exports = function(sequelize, DataTypes) {

    return sequelize.define('categories', {
        name: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        isActive: {
            type: DataTypes.BOOLEAN
        }
    })
}