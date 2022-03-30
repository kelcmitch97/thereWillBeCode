const seedUsers = require('./user-seeds');
const seedLocations = require('./location-seeds');
const seedEvents = require('./event-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedLocations();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');
  
    process.exit(0);
    
  };
  
  seedAll();