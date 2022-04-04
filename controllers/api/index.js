const router = require('express').Router();

const userRoutes = require('./user-routes');
const locationRoutes = require('./location-routes');
const eventRoutes = require('./event-routes');
const venueRoutes = require('./venue-routes');
const sportRoutes = require('./sport-routes');

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/events', eventRoutes);
router.use('/venues', venueRoutes);
router.use('/sports', sportRoutes);

module.exports = router;
