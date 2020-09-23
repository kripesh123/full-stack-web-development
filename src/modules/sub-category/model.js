'user strict'

module.exports = function (sequelize, DataTypes) {
    let SubCategory = sequelize.define('sub_categories', {
        name: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        categoryId: {
            type: DataTypes.INTEGER
        },
        isActive: {
            type: DataTypes.BOOLEAN
        }
    })

    SubCategory.associate = function (models) {
        SubCategory.belongsTo(models.Category)
    }

    return SubCategory;

}