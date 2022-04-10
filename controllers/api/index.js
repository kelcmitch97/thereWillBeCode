const router = require('express').Router();
//Import routes.
const userRoutes = require('./user-routes');
const locationRoutes = require('./location-routes');
const eventRoutes = require('./event-routes');
const venueRoutes = require('./venue-routes');
const sportRoutes = require('./sport-routes');
//Build the routes.
router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/events', eventRoutes);
router.use('/venues', venueRoutes);
router.use('/sports', sportRoutes);
//Exporting the routes.
module.exports = router;
