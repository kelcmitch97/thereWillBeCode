const { MembersUser } = require('../models');

const membersData = [
    {
        user_id: 101,
        event_id: 101
    },
    {
        user_id: 101,
        event_id: 102
    }

];

const seedMembers = () => MembersUser.bulkCreate(membersData);

module.exports = seedMembers;