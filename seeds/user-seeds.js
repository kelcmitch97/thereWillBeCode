const { User } = require('../models');

const userData = [
    {
      user_name: 'Test Name',
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;