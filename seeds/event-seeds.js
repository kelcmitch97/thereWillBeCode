const { EventCreated } = require('../models');

const eventData = [
    {
      id: 100,
      event_name: 'Test Event 100',
      date_time: null,
      user_id: 100,
      sport_id: 1, 
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids
      availability: true, // tbd
      description: 'looking for a goalie',
      members: 1
    },
    {
      id: 101,
      event_name: 'Test Event 101',
      date_time: null,
      user_id: 101,
      sport_id: 1, // hockey
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids RamsdenPark
      availability: true, // tbd
      description: 'looking for defence',
      members: 1
    },
    {
      id: 102,
      event_name: 'Test Event 102',
      date_time: null,
      user_id: 102,
      sport_id: 5, // tennis
      members_needed: 1,
      location: 77, // using actual Parks & Rec location ids HighPark
      availability: true, // tbd
      description: 'looking for doubles partner',
      members: 1
    },
    {
      id: 103,
      event_name: 'Test Event 103',
      date_time: null,
      user_id: 103,
      sport_id: 2, // baseball
      members_needed: 1,
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: true, // tbd
      description: 'looking for catcher',
      members: 1
    },
    {
      id: 104,
      event_name: 'Test Event 104',
      date_time: null,
      user_id: 104,
      sport_id: 3, // basketball
      members_needed: 1,
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: true, // tbd
      description: 'looking for several players, open to all genders',
      members: 1
    },
    {
      id: 105,
      event_name: 'Test Event 105',
      date_time: null,
      user_id: 105,
      sport_id: 3, // basketball
      members_needed: 1,
      location:  514, // using actual Parks & Rec location ids Earlscourt
      availability: true,
      description: 'looking for keen players, competitive group of men',
      members: 2,
    },
    {
      id: 106,
      event_name: 'Test Event 106',
      date_time: null,
      user_id: 106,
      sport_id: 4,
      members_needed: 1, 
      location: 508, // using actual Parks & Rec location ids WestonLionsPark
      availability: true, // tbd
      description: 'skill building and pick-up play for adults all levels',
      members: 1
    },

  ]

const seedEvents = () => EventCreated.bulkCreate(eventData);

module.exports = seedEvents;