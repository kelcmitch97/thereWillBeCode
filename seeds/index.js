const seedUsers = require('./user-seeds');
const seedLocations = require('./location-seeds');
const seedEvents = require('./event-seeds');
const seedSports = require('./sports-seeds');
const seedVenues = require('./venue-seeds');
const seedLocationVenue = require('./locationvenue-seeds');
const seedMembers = require('./members-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedSports();
    console.log('\n----- SPORTS SEEDED -----\n');

    await seedVenues();
    console.log('\n----- VENUES SEEDED -----\n');

    await seedLocations();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedLocationVenue();
    console.log('\n----- LOCATIONVENUE SEEDED -----\n');

    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');

    await seedMembers();
    console.log('\n----- MEMBERS SEEDED -----\n');



    process.exit(0);

  };

  seedAll();