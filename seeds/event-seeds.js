const { EventCreated } = require('../models');

const eventData = [
    {
      id: 100,
      event_name: 'Hockey Event 100',
      date_time: "2022-04-15T19:30:00",
      user_id: 100,
      sport_id: 1,
      members_needed: 1,
      location_id: 1, // using actual Parks & Rec location_id ids
      availability: false, // tbd
      description: 'looking for a goalie',
      members: 1
    },
    {
      id: 101,
      event_name: 'Hockey Event 101',
      date_time: "2022-05-05T18:00:00",
      user_id: 101,
      sport_id: 1, // hockey
      members_needed: 1,
      location_id: 2, // using actual Parks & Rec location_id ids RamsdenPark
      availability: true,
      description: 'looking for defence',
      members: 1
    },
    {
      id: 102,
      event_name: 'Tennis Event 102',
      date_time: "2022-04-23T12:45:00",
      user_id: 102,
      sport_id: 5, // tennis
      members_needed: 1,
      location_id: 3, // using actual Parks & Rec location_id ids HighPark
      availability: true,
      description: 'looking for doubles partner',
      members: 1
    },
    {
      id: 103,
      event_name: 'Baseball Event 103',
      date_time: "2022-04-20T09:15:00",
      user_id: 103,
      sport_id: 2, // baseball
      members_needed: 1,
      location_id:  4, // using actual Parks & Rec location_id ids TrinityBellwoods
      availability: true,
      description: 'looking for catcher',
      members: 1
    },
    {
      id: 104,
      event_name: 'Basketball Event 104',
      date_time: "2022-05-08T19:30:00",
      user_id: 104,
      sport_id: 3, // basketball
      members_needed: 1,
      location_id:  5, // using actual Parks & Rec location_id ids TrinityBellwoods
      availability: true,
      description: 'looking for several players, open to all genders',
      members: 1
    },
    {
      id: 105,
      event_name: 'Basketball Event 105',
      date_time: "2022-05-01T17:00:00",
      user_id: 105,
      sport_id: 3, // basketball
      members_needed: 1,
      location_id:  6, // using actual Parks & Rec location_id ids Earlscourt
      availability: false,
      description: 'looking for keen players, competitive group of men',
      members: 2,
    },
    {
      id: 106,
      event_name: 'Soccer Event 106',
      date_time: "2022-04-10T10:55:00",
      user_id: 106,
      sport_id: 4,
      members_needed: 1,
      location_id: 7, // using actual Parks & Rec location_id ids WestonLionsPark
      availability: true,
      description: 'skill building and pick-up play for adults all levels',
      members: 1
    },

  ]

const seedEvents = () => EventCreated.bulkCreate(eventData);

module.exports = seedEvents;