const { User } = require('../models');

const userData = [
    {
      id: 100,
      username: 'SportsNut',
      email: 'sportsnut@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'looking for players at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 101,
      username: 'KeenPlayer',
      email: 'keenplayer@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'looking to participate at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 102,
      username: 'PickupPlayer',
      email: 'pickupplayer@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball',
      description: 'looking to play at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 103,
      username: 'LoveToPlay',
      email: 'lovetoplay@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'looking for players at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 104,
      username: 'SportsEventsFun',
      email: 'sportseventsfun@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'creating events for community level players',
      events_created: '',
      events_participating: ''
    },
    {
      id: 105,
      username: 'GetTogetherSports',
      email: 'gettogethersports@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'getting community-level players together',
      events_created: '',
      events_participating: ''
    },
    {
      id: 106,
      username: 'SportsAreUs',
      email: 'sportsareus@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'inclusive community-level sports events',
      events_created: '',
      events_participating: ''
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;