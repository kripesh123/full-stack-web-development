'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('topics', [
      {
        name: 'grenadine',
        description: 'thin syrup made from pomegranate juice; used in mixed drinks',
        type:params.topic.types.sensational.id,
        featured:params.topic.featured.trending.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pomegranate',
        description: 'shrub or small tree having large red many-seeded fruit',
        type:params.topic.types.sensational.id,
        featured:params.topic.featured.trending.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'hefty',
        description: 'of considerable weight and size',
        type:params.topic.types.adult.id,
        featured:params.topic.featured.trendingThisWeek.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'gladiolus',
        description: 'any of numerous plants of the genus Gladiolus native chiefly to tropical and South Africa having sword-shaped leaves and one-sided spikes of brightly colored funnel-shaped flowers; widely cultivated',
        type:params.topic.types.aggressive.id,
        featured:params.topic.featured.trendingThisMonth.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pelter',
        description: 'a thrower of missiles',
        type:params.topic.types.adult.id,
        featured:params.topic.featured.main.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'concretize',
        description: 'make something concrete',
        type:params.topic.types.adult.id,
        featured:params.topic.featured.trendingThisMonth.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'manikin',
        description: 'a life-size dummy used to display clothes',
        type:params.topic.types.non.id,
        featured:params.topic.featured.trendingThisWeek.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'canvass',
        description: 'get opinions by asking specific questions',
        type:params.topic.types.adult.id,
        featured:params.topic.featured.main.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lubberly',
        description: 'clumsy and unskilled',
        type:params.topic.types.non.id,
        featured:params.topic.featured.non.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('topics', null, {});
  }
}