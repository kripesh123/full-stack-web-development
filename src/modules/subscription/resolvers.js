// App Imports
import models from '../../setup/models'

// Create subscription
export async function create(parentValue, { topicId }, { auth }) {
    if (auth.isAuthenticated) {
        return await models.Subscription.create({
            topicId,
            userId: auth.user.id
        })
    } else {
        throw new Error('please login to subscribe to this topic.')
    }
}

// Get subscripton by user
export async function getByUser(parentValue, {}, { auth }) {
    if (auth.isAuthenticated) {
        return await models.Subscription.findAll({
            where: {
                userId: auth.user.id
            },
            include: [
                {model: models.User, as: 'user'},
                {model: models.Topic, as: 'topic'}
            ]
        })
    } else {
        throw new Error('please login to view your subscriptions.')
    }
}

export async function remove(parentValue, { id }, { auth }){
    if (auth.isAuthenticated) {
        return await models.Subscription.destroy({where: {id, userId: auth.user.id}})
    } else {
        throw new Error('Access denied.')
    }
}

