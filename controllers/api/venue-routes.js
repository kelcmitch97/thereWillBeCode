const router = require('express').Router();
const { VenueType } = require('../../models');

router.route('/') //Basic routes for venues entries.
.get((req, res) => { //Get all venues.
    VenueType.findAll({})
    .then(venueTypeData => res.json(venueTypeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => { //Create a venues.
    VenueType.create({
        venue: req.body.venue
    }).then( res.json({message: 'Venue Type Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id') //Routes to modify a single venue entry.
.get((req, res) => { //Get a single venue.
    VenueType.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(venueTypeData => {
        if (!venueTypeData) {
            res.status(404).json({ message: 'No venue type found with this id to return.' });
            return;
        }
        res.json(venueTypeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.put((req, res) => { //Update a single venue.
    VenueType.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(venueTypeData => {
        if (!venueTypeData[0]) {
            res.status(404).json({ message: 'No venue type found with this id to update.' });
            return;
        }
        res.json({message: "Venue type has been updated"});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.delete((req, res) => { //Delete a single venue.
    VenueType.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(venueTypeData => {
        if (!venueTypeData) {
            res.status(404).json({ message: 'No venue type found with this id to delete.' });
            return;
        }
        res.json({message: "The venue type has been deleted."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Exporting the routes.
module.exports = router;