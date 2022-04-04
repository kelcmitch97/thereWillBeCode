const { User } = require('../models');

const userData = [
    {
      id: 100,
      user_name: 'SportsNut',
      email: 'sportsnut@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer, tennis',
      description: 'looking for players at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 101,
      user_name: 'KeenPlayer',
      email: 'keenplayer@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer, tennis',
      description: 'looking to participate at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 102,
      user_name: 'PickupPlayer',
      email: 'pickupplayer@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball',
      description: 'looking to play at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 103,
      user_name: 'LoveToPlay',
      email: 'lovetoplay@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'looking for players at community level',
      events_created: '',
      events_participating: ''
    },
    {
      id: 104,
      user_name: 'SportsEventsFun',
      email: 'sportseventsfun@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer',
      description: 'creating events for community level players',
      events_created: '',
      events_participating: ''
    },
    {
      id: 105,
      user_name: 'GetTogetherSports',
      email: 'gettogethersports@fakemail.com',
      password: 'password123',
      sports: 'hockey, baseball, basketball, soccer, tennis',
      description: 'getting community-level players together',
      events_created: '',
      events_participating: ''
    },
    {
      id: 107,
      user_name: 'RacketsAndBats',
      email: 'racketsandbats@fakemail.com',
      password: 'password123',
      sports: 'baseball, tennis',
      description: 'inclusive community-level sports events',
      events_created: '',
      events_participating: ''
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;