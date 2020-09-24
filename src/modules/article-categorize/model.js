'use strict'

module.exports = function(sequilize, DataTypes) {

    let ArticleCategorize = sequilize.define('article_categorizes', {
        categoryId: {
            type: DataTypes.INTEGER
        },
        subCategoryId: {
            type: DataTypes.INTEGER
        },
        articleId: {
            type: DataTypes.INTEGER

        }
    })

    ArticleCategorize.associate = function(models) {
        ArticleCategorize.belongsTo(models.Category)
        ArticleCategorize.belongsTo(models.SubCategory, {as: 'subCategory'})
        ArticleCategorize.belongsTo(models.Article)
    }

    return ArticleCategorize
}