const { VenueType } = require('../models');

const venueData = [
    {
        venue: "outdoor-rink"
    },
    {
        venue: "indoor-arena"
    },
    {
        venue: "baseball-diamond"
    },
    {
        venue: "basketball-court"
    },
    {
        venue: "outdoor-drypad"
    },
    {
        venue: "soccer-field"
    },
    {
        venue: "sports-field"
    },
    {
        venue: "tennis-court"
    },
];

const seedVenues = () => VenueType.bulkCreate(venueData);

module.exports = seedVenues;