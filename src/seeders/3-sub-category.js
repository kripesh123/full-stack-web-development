'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('sub_categories', [
            {
                name: 'Cameras',
                slug: 'electronics/cameras',
                description: 'DSLRs, pocket-sized models, and ultrazooms—if it takes a photo, we review it, because you need the best camera to capture your best moments. From action cams to mirrorless cameras to point-and-shoots, we\'ve made a recommendation to fit your needs and budget. Plus, we have guides for underwater photography and photo-scanning services.',
                categoryId:1,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Laptops',
                slug: 'electronics/laptops',
                description: 'While it may be easy to read an email on a smartphone or tablet, sometimes you need a bigger screen and an actual keyboard. We\'ve tested more than a hundred laptops over the course of a year to find the best laptops for most people. Whether you work predominantly on the Web or need a heavy-duty power notebook, our picks fit a range of budgets and needs.',
                categoryId:1,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Accessories',
                slug: 'electronics/accessories',
                description: 'If it goes on your device or plugs into it, we have you covered with reviews of everything from cases to cables to docks to keyboards, and whatever other accessories you may need for your smartphone, computer, tablet, and more. Our team\'s picks will help you personalize, protect, and be productive—this is the stuff you use every day, and we\'ve found the best of it.',
                categoryId:1,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bags',
                slug: 'travel/bags',
                description: 'Whether you need a carry-all to get you through your work or school day or a pack that\'ll take you through a weeklong adventure, we\'ve got you covered. We\'ve spent hundreds of hours researching and testing the best bags to make sure you\'re carrying your stuff in comfort and style.',
                categoryId:2,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gear',
                slug: 'travel/gear-travel',
                description: 'Whether you\'re preparing for an international trekking expedition or just trying to sleep better on red-eye flights, our field-tested travel-gear picks will help you reach your next destination in relative comfort and enjoy it once you\'re there. Our remote staff takes travel seriously—in fact, we\'ve worked remotely from every continent not named Antarctica.',
                categoryId:2,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Backpacks',
                slug: 'travel/backpacks',
                description: 'The backpack your kids need for school, the one you take to work, and the one you use while while wandering around Tuscany all need to do different things—and our experts have spent hundreds of hours finding the best for those (and other) situations. So whether you need a business-casual backpack or one that\'ll let you take a week\'s worth of clothing on vacation, we have picks for you.',
                categoryId:2,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cycling',
                slug: 'health-fitness/cycling',
                description: 'From multi-tools that can keep your bike going to kid seats that can attach to your bicycle, we’ve probably researched it. Our writers have tested the best bicycles, helmets, locks, and cycling accessories to get you out on the road or trail. Whether you\'re commuting or just doing some leisurely riding, you\'ll benefit from the hundreds of hours we\'ve spent researching the best cycling gear.',
                categoryId:3,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Exercise',
                slug: 'health-fitness/exercise',
                description: 'Looking for the best exercise equipment and fitness gear? We’ve tried it all. We’ve run on treadmills, swung kettle bells, stretched on yoga mats, jumped rope, balanced on balls, and recovered with foam rollers—all to find the best products to help you stay in shape.',
                categoryId:3,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Personal Care',
                slug: 'health-fitness/personal-care',
                description: 'You can find hundreds of barely differentiated lotions and potions in any drugstore or department store. It might be difficult to tell what\'s different on the shelves, but we\'ve put in the work to find the best items for every body and budget.',
                categoryId:3,
                isActive:true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('sub_categories', null, {})
    }
}