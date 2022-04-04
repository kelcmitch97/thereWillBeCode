const { Sports } = require('../models');

const sportsData = [

 {
  id: 100,
  sport: 'hockey'
 },
 {
  id: 200,
  sport: 'baseball'
 },
 {
  id: 300,
  sport: 'basketball'
 },
 {
  id: 400,
  sport: 'soccer'
 },
 {
  id: 500,
  sport: 'tennis'
 },
]

 const seedSports = () => Sports.bulkCreate(sportsData);

module.exports = seedSports;
