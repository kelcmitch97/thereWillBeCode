const { VenueType } = require('../models');

const venueData = [
    {
        venue: "NameHere1"
    },
    {
        venue: "NameHere2"
    },
    {
        venue: "NameHere3"
    },
    {
        venue: "NameHere4"
    },
    {
        venue: "NameHere5"
    },
];

const seedVenues = () => VenueType.bulkCreate(venueData);

module.exports = seedVenues;