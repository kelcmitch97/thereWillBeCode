const { Event } = require('../models');

const eventData = [
    {
      event_name: 'Test Event',
    },
]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;