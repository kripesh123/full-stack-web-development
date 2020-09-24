'use strict';

// Product
module.exports = function (sequelize, DataTypes) {
  let Product = sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    body: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    featured: {
      type: DataTypes.INTEGER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  });

  Product.associate = function (models) {
    Product.belongsTo(models.User);
  };

  return Product;
};
