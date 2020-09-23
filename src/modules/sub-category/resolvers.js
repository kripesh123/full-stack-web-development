import models from "../../setup/models";

export async function getAll(parentValue, { orderBy }) {
    return await models.SubCategory.findAll({
        order: [['id', orderBy]],
        include: [
            {model: models.Category, as: 'category'}
        ]
    })
}

export async function getById(parentValue, {subCategoryId }) {
    const subCategory = await models.SubCategory.findOne({
        where: { id: subCategoryId},
        include: [
            {model: models.Category, as: 'category'}
        ]
    })

    if(!subCategory) {
        return new Error('Sub CAtegories Not FOund')
    }
    return subCategory;
}

export async function getByCategoryId(parentValue, { categoryId }) {
    const subCategory = await models.SubCategory.findAll({
        where: {categoryId},
        include: [
            {model: models.Category, as: 'category'}
        ]
    })

    if (!subCategory) {
        return new Error('SubCategory can not found')
    } else {
        return subCategory;
    }
}

export async function create(parentValue, {name, slug, description, categoryId, isActive}) {
    return await models.SubCategory.create({
        name, slug, description, categoryId, isActive
    })
}