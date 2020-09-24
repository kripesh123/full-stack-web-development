'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Wallet for Women',
        slug: 'wallet-for-women',
        description: 'A very nice wallet for women.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/wallet-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wallet for Men',
        slug: 'wallet-for-men',
        description: 'A very nice wallet for men.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/wallet-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Earring for Women',
        slug: 'earring-for-women',
        description: 'A very nice earring for women.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/earring-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Earring for Men',
        slug: 'earring-for-men',
        description: 'A very nice earring for men.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/earring-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T-Shirt for Women - Grey',
        slug: 't-shirt-for-women-grey',
        description: 'A very nice grey t-shirt for women.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T-Shirt for Men - White',
        slug: 't-shirt-for-men-white',
        description: 'A very nice white t-shirt for men.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T-Shirt for Men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
