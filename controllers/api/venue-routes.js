const router = require('express').Router();
const { VenueType } = require('../../models');

router.route('/')
.get((req, res) => {
    VenueType.findAll({})
    .then(venueTypeData => res.json(venueTypeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => {
    VenueType.create({
        venue: req.body.venue
    }).then( res.json({message: 'Venue Type Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id')
.get((req, res) => {
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
.put((req, res) => {
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
.delete((req, res) => {
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

module.exports = router;