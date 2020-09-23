'use strict'

// Article
module.exports = function(sequelize, DataTypes) {
  let Article = sequelize.define('articles', {
    title: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    body: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.INTEGER
    },
    featured: {
        type: DataTypes.INTEGER
    },
    userId:{
      type: DataTypes.INTEGER
    },
    isActive: {
        type: DataTypes.BOOLEAN
    }
  })

  Article.associate = function(models) {
    Article.belongsTo(models.User)
  }

  return Article
}