import models from '../../setup/models'

export async function getAll() {
    return await models.ArticleCategorize.findAll({
        order: [['id', 'DESC']],
        include: [
            { model: models.Category, as: 'category' },
            { model: models.SubCategory, as: 'subCategory' },
            { model: models.Article, as: 'article' },

        ]
    })
}

export async function getByID(parentValue, { id }) {
    return await models.ArticleCategorize.findOne({
        where: { id },
        include: [
            { model: models.Category, as: 'category' },
        ]
    })
}

export async function getByCategoryID(parentValue, { categoryId }) {
    return await models.ArticleCategorize.findAll({
        where: { categoryId },
        include: [
            { model: models.Category, as: 'category' },
        ]
    })
}