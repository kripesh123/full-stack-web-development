module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('topics', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        type: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        featured: {
            allowNull: false,
            defaultValue: 5,
            type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('topics');
    }
  }
  