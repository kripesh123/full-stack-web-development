module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('article_categorizes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id'
                }
            },
            subCategoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'sub_categories',
                    key: 'id'
                }
            },
            articleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'articles',
                    key: 'id'
                }
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
        return queryInterface.dropTable('article_categorizes')
    }
}