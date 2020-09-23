module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('articles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            slug: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            body: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            image: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            type: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            featured: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            isActive: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('articles')
    }
}