const { Event } = require('../models');

const eventData = [
    {
      id: 100,
      event_name: 'Test Event 100',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 100, 
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids
      availability: Boolean, // tbd
      description: 'looking for a goalie',
      members: DataTypes.INTEGER
    },
    {
      id: 101,
      event_name: 'Test Event 101',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 100, // hockey
      members_needed: 1,
      location: 167, // using actual Parks & Rec location ids RamsdenPark
      availability: Boolean, // tbd
      description: 'looking for defence',
      members: DataTypes.INTEGER
    },
    {
      id: 102,
      event_name: 'Test Event 102',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 100, // hockey
      location: 77, // using actual Parks & Rec location ids HighPark
      availability: Boolean, // tbd
      description: 'looking for defence',
      members: DataTypes.INTEGER
    },
    {
      id: 103,
      event_name: 'Test Event 103',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 200, // baseball
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: Boolean, // tbd
      description: 'looking for catcher',
      members: DataTypes.INTEGER
    },
    {
      id: 104,
      event_name: 'Test Event 104',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 300, // basketball
      location:  241, // using actual Parks & Rec location ids TrinityBellwoods
      availability: Boolean, // tbd
      description: 'looking for several players, open to all genders',
      members: DataTypes.INTEGER
    },
    {
      id: 105,
      event_name: 'Test Event 105',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 300, // basketball
      location:  514, // using actual Parks & Rec location ids Earlscourt
      availability: Boolean, // tbd
      description: 'looking for keen players, competitive group of men',
      members: DataTypes.INTEGER
    },
    {
      id: 106,
      event_name: 'Test Event 106',
      date_time: 'DataTypes.DATE [tbd]',
      sport: 400, 
      location: 508, // using actual Parks & Rec location ids WestonLionsPark
      availability: Boolean, // tbd
      description: 'skill building and pick-up play for adults all levels',
      members: DataTypes.INTEGER
    },

  ]

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;