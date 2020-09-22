'use strict'

module.exports ={
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [
            {
                name: 'Electronics',
                slug: 'electronics',
                description: 'From TVs, receivers, headphones, and speakers to cameras, laptops, keyboards, smartphones, and routers, our team of experts has spent hundreds of hours testing the best home theater, audio, computer, networking, and gaming gear and accessories. If it has a speaker, a screen, or an antenna, or if it plugs into something that does, it\'s probably here.',
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Travel',
                slug: 'travel',
                description: 'Traveling well is one of life’s great pleasures, whether you’re alone or with family and friends. But what does it mean to travel well? When it comes to gear, it means packing as few bags as possible and bringing only the necessities. Different trips have different needs, which is why we have recommendations for business trips, family vacations, European backpacking trips, and everything in between.',
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Health & Fitness',
                slug: 'health-fitness',
                description: 'Whether you\'re aging in place, recovering from an injury, learning about your body, or getting in shape, we\'ve tested the latest equipment, clothing, and technology that can help keep you healthy. From yoga mats to smart bathroom scales, here\'s the health tech and fitness gear we recommend.',
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('categories', null, {})
    }
}