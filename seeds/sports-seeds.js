const { Sports } = require('../models');

const sportsData = [
    {
        sport: 'hockey'
    },
    {
        sport: 'baseball'
    },
    {
        sport: 'basketball'
    },
    {
        sport: 'soccer'
    },
    {
        sport: 'tennis'
    }
]

const seedSports = () => Sports.bulkCreate(sportsData);

module.exports = seedSports;
