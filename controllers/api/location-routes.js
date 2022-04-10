const router = require('express').Router();
const { Location, VenueType, LocationVenue } = require('../../models');

router.route('/') //Basic routes for location entries.
.get((req, res) => { //Get all locations.
    Location.findAll({
        include: [
            {
              model: VenueType,
              through: LocationVenue,
              attributes: ['venue']
            }
        ]
  })
    .then(locationData => res.json(locationData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => { //Create a location.
    Location.create({
        city_name: req.body.city_name,
        location_name: req.body.location_name,
        location_address: req.body.location_address,
        venue_type_id: req.body.venue_type_id
    }).then( res.json({message: 'Location Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id') //Routes to modify a single location entry.
.get((req, res) => { //Get a single location.
    Location.findOne({
        where: {
        id: req.params.id
        }
    })
    .then(locationData => {
        if (!locationData) {
            res.status(404).json({ message: 'No Location found with this id to return.' });
            return;
        }
        res.json(locationData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.put((req, res) => { //Update a single location.
    Location.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(locationData => {
        if (!locationData[0]) {
            res.status(404).json({ message: 'No Location found with this id to update.' });
            return;
        }
        res.json({message: "Location has been updated"});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.delete((req, res) => { //Delete a single location.
    Location.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(locationData => {
        if (!locationData) {
            res.status(404).json({ message: 'No Location found with this id to delete.' });
            return;
        }
        res.json({message: "The Location has been deleted."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Exporting the routes.
module.exports = router;