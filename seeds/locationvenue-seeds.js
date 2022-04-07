const { LocationVenue } = require('../models');

const locationVenueData = [
    {
        location_id: 1,
        venue_id: 1
    },
    {
        location_id: 1,
        venue_id: 2
    },
    {
        location_id: 1,
        venue_id: 3
    },
    {
        location_id: 1,
        venue_id: 4
    },

];

const seedLocationVenues = () => LocationVenue.bulkCreate(locationVenueData);

module.exports = seedLocationVenues;