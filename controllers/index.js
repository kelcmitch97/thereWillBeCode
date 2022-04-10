//Import routes.
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
//Build the routes.
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use((req, res) => {
  res.status(404).end();
});
//Exporting the routes.
module.exports = router;