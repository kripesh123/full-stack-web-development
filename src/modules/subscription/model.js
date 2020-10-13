'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
    let Subscription = sequelize.define('subscriptions', {
        userId: {
            type: DataTypes.INTEGER
        },
        topicId: {
            type: DataTypes.INTEGER
        }
    })

    Subscription.associate = function(models) {
        Subscription.belongsTo(models.User)
        Subscription.belongsTo(models.Topic)
    }

    return Subscription
}