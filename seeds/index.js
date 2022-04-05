const seedUsers = require('./user-seeds');
const seedLocations = require('./location-seeds');
const seedEvents = require('./event-seeds');
const seedSports = require('./sports-seeds');
const seedVenues = require('./venue-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedVenues();
    console.log('\n----- VENUES SEEDED -----\n');

    await seedLocations();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await seedSports();
    console.log('\n----- SPORTS SEEDED -----\n');

    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);

  };

  seedAll();