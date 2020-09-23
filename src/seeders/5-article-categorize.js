'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('article_categorizes', [
            {
                categoryId:1,
                subCategoryId: 1,
                articleId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:2,
                subCategoryId: 4,
                articleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:3,
                subCategoryId: 7,
                articleId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:1,
                subCategoryId: 2,
                articleId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:2,
                subCategoryId: 5,
                articleId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:3,
                subCategoryId: 8,
                articleId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:1,
                subCategoryId: 3,
                articleId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:2,
                subCategoryId: 6,
                articleId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:3,
                subCategoryId: 9,
                articleId: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                categoryId:1,
                subCategoryId: 2,
                articleId: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('article_categorizes', null, {});
    }
}