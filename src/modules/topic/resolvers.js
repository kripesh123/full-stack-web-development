import parmas from '../../config/params.json'
import models from '../../setup/models'

// Get all Topics
export async function getAll(parentValue, { orderBy }) {
    return await models.Topic.findAll({ order: [['id', orderBy]] })
}

// Get topic by ID
export async function getById(parentValue, { topicId }) {
    const topic = await models.Topic.findOne({ where: { id: topicId } })

    if (!topic) {
        throw new Error('the topic you are looking for does not exists.')
    } else {
        return topic
    }
}

export async function getTypes() {
    return Object.values(parmas.topic.types)
}

export async function getFeatured() {
    return Object.values(parmas.topic.featured)
}

