'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('subscriptions', [
            {
                userId:1,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:1,
                topicId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId:2,
                topicId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('subscriptions', null, {})
    }
}


