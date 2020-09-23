'use strict'

const params = require('../config/params');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('articles', [
            {
                title: '5 Small Smart Devices That Can Prevent Major Home Damage',
                slug: '5-small-smart-devices-that-can-prevent-major-home-damage',
                description: 'I don’t like surprises, especially the kind that cost me money. Our sump pump failed one winter during a flash thaw.',
                body:'but I didn’t find out about it until several inches of water ruined the electronics, books, and furniture in our basement. I could have avoided that damage with a simple smart water-leak sensor.',
                image:'/images/stock/5-small-smart-devices-that-can-prevent-major-home-damage.jpg',
                type:params.article.types.blog.id,
                featured:params.article.featured.non.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Best Drill',
                slug: 'the-best-drill-for-common-household-projects',
                description: 'Cordless drills are more powerful than they’ve ever been, yet they’ve also gotten so.',
                body:'Manufacturers like to market them to pros, but don’t be put off: Anyone going beyond the most rudimentary home improvement tasks—whether hanging a baby gate or mounting shelving—will find that a drill.',
                image:'/images/stock/the-best-drill-for-common-household-projects.jpg',
                type:params.article.types.review.id,
                featured:params.article.featured.non.id,
                userId:1,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Cooking a Low-Key Brunch at Home',
                slug: 'cooking-a-low-key-brunch-at-home',
                description: 'Brunch at home is often the way to go when you’d rather skip the weekend restaurant lines and save money.',
                body:'A little practice and good equipment can help you whip up eggs, coffee, and pancakes that surpass what you’d get at your local spot.',
                image:'/images/stock/cooking-a-low-key-brunch-at-home.jpg',
                type:params.article.types.list.id,
                featured:params.article.featured.secondary.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: '5 Cheap(ish) Things to Upgrade Your Coffee Experience',
                slug: '5-cheapish-things-to-upgrade-your-coffee-experience',
                description: '“Oh! The coffee’s good today,” is something my husband or I murmur on occasion as we slowly.',
                body:'come alive with our first sip of the morning. On most days, though, the coffee we make at home is just good enough. We make it the same way every time, but whether or not we achieve coffee nirvana on any.',
                image:'/images/stock/5-cheapish-things-to-upgrade-your-coffee-experience.jpg',
                type:params.article.types.blog.id,
                featured:params.article.featured.secondary.id,
                userId:1,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Elements of Brunch',
                slug: 'brunch-elements',
                description: 'Brunch made at home beats the long lines and rubbery omelets you find at restaurants.',
                body:'The right tools and a little pre-planning can help you spend as much mimosa-holding, scone-sampling time with your guests as possible. To find these brunch essentials, we hand-picked items from our full guides and conducted an additional 25 hours of research.',
                image:'/images/stock/brunch-elements.jpg',
                type:params.article.types.review.id,
                featured:params.article.featured.primary.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Everything You Need to Block Light and Noise From Your Bedroom',
                slug: 'everything-you-need-to-block-light-and-noise-from-your-bedroom',
                description: 'Noisy neighbors. Obnoxious street lamps. A 5 a.m. garbage truck. Daylight saving.',
                body:'Sleep disruptions can sometimes feel endless. But you don’t have to toss and turn all night. Our sleep team has spent hundreds of hours testing the best gear to help you create a quiet, dark oasis—one where you might even snooze after the sun rises.',
                image:'/images/stock/everything-you-need-to-block-light-and-noise-from-your-bedroom.jpg',
                type:params.article.types.list.id,
                featured:params.article.featured.primary.id,
                userId:1,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'What to Buy: A Grown-Up Bed That Will Last for Years',
                slug: 'what-to-buy-a-grown-up-bed-that-will-last-for-years',
                description: 'Adulting is expensive, and when the bills roll in, blowing a chunk of your paycheck on a new bed can feel daunting.',
                body:'But a good-looking, comfy space to sleep is always a good investment. The right frame, mattress, and bedding can promote better rest and pull together the look of your entire room with a lot less effort and money than you might think.',
                image:'/images/stock/what-to-buy-a-grown-up-bed-that-will-last-for-years.jpg',
                type:params.article.types.blog.id,
                featured:params.article.featured.main.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Best Online Flower Delivery Service',
                slug: 'best-online-flower-delivery',
                description: 'This is your official warning: Valentine’s Day is close at hand. If you want to treat your loved ones.',
                body:'Of the six online flower delivery services we tested, its stylish arrangements were the most beautiful, the freshest, the best packaged, and the easiest to order. And stay tuned: We’re still working.',
                image:'/images/stock/best-online-flower-delivery.jpg',
                type:params.article.types.review.id,
                featured:params.article.featured.main.id,
                userId:1,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Tools and Emergency Supplies to Keep in the Car for Winter Driving',
                slug: 'tools-and-emergency-supplies-to-keep-in-the-car-for-winter-driving',
                description: 'The gear you carry in your car while driving in the winter can make or break your trip.',
                body:'Here are the everyday essentials, some emergency items in case your vehicle has trouble, and some things you can probably leave behind.',
                image:'/images/stock/tools-and-emergency-supplies-to-keep-in-the-car-for-winter-driving.jpg',
                 type:params.article.types.list.id,
                featured:params.article.featured.home.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Best Bed Pillows',
                slug: 'best-bed-pillows',
                description: 'The perfect pillow can revolutionize your sleep.',
                body:'Spending more than 1,000 nights testing 118 pillows has taught us this: The right pillow for you depends on your body shape and sleep position. That’s why our favorite pillows—the shredded-foam.',
                image:'/images/stock/best-bed-pillows.jpg',
                type:params.article.types.review.id,
                featured:params.article.featured.home.id,
                userId:2,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('articles', null, {})
    }
}


