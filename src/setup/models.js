// Imports
import Sequelize from 'sequelize';

// App Import
import databaseConnection from './database';

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Category: databaseConnection.import('../modules/category/model'),
  SubCategory: databaseConnection.import('../modules/sub-category/model'),
  Article: databaseConnection.import('../modules/article/model'),
  ArticleCategorize: databaseConnection.import(
    '../modules/article-categorize/model'
  ),
  Product: databaseConnection.import('../modules/product/model'),
  Topic: databaseConnection.import('../modules/topic/model')
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;
