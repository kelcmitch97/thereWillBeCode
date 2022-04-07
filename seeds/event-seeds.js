const { EventCreated } = require('../models');

const eventData = [
    {
      id: 100,
      user_id: 106,
      event_name: 'Test Event 100',
      date_time: "2022 4 27",
      sport: 100,
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids
      availability: true, // tbd
      description: 'looking for a goalie'
    },
    {
      id: 101,
      user_id: 105,
      event_name: 'Test Event 101',
      date_time: "2022 4 27",
      sport: 100, // hockey
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids RamsdenPark
      availability: true, // tbd
      description: 'looking for defence'
    },
    {
      id: 102,
      user_id: 104,
      event_name: 'Test Event 102',
      date_time: "2022 4 27",
      sport: 500, // tennis
      members_needed: 1,
      location: 77, // using actual Parks & Rec location ids HighPark
      availability: true, // tbd
      description: 'looking for doubles partner'
    },
    {
      id: 103,
      user_id: 101,
      event_name: 'Test Event 103',
      date_time: "2022 4 27",
      sport: 200, // baseball
      members_needed: 1,
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: true, // tbd
      description: 'looking for catcher'
    },
    {
      id: 104,
      user_id: 102,
      event_name: 'Test Event 104',
      date_time: "2022 4 27",
      sport: 300, // basketball
      members_needed: 1,
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: true, // tbd
      description: 'looking for several players, open to all genders'
    },
    {
      id: 105,
      user_id: 101,
      event_name: 'Test Event 105',
      date_time: "2022 4 27",
      sport: 300, // basketball
      members_needed: 1,
      location:  514, // using actual Parks & Rec location ids Earlscourt
      availability: true,
      description: 'looking for keen players, competitive group of men'
    },
    {
      id: 106,
      user_id: 100,
      event_name: 'Test Event 106',
      date_time: "2022 4 27",
      sport: 400,
      members_needed: 1,
      location: 508, // using actual Parks & Rec location ids WestonLionsPark
      availability: true, // tbd
      description: 'skill building and pick-up play for adults all levels'
    }

  ]

const seedEvents = () => EventCreated.bulkCreate(eventData);

module.exports = seedEvents;