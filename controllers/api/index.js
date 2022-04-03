const router = require('express').Router();

const userRoutes = require('./user-routes');
const locationRoutes = require('./location-routes');
const eventRoutes = require('./event-routes');
const venueroutes = require('./venue-routes')

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/events', eventRoutes);
router.use('/venues', venueroutes);

module.exports = router;
