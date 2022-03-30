const { Location } = require('../models');

const locationData = [
    {
      location_name: 'Test Location',
    },
]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;