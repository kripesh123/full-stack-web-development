import models from "../../setup/models";

// get all category
export async function getAll() {
    return await models.Category
        .findAll({ order: [['id', 'DESC']] })
}

// get by slug
export async function getBySlug(parentValue, { slug }) {
    const category = await models.Category.findOne({ where: { slug } })

    if (!category) {
        return new Error('Category not found')
    }
    return category;
}

// create
export async function create(parentValue, {name, slug, description, isActive}) {
    return await models.Category.create({
        name, slug, description, isActive
    })
}