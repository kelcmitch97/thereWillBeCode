const router = require('express').Router();
const { Location } = require('../../models');

router.route('/')
.get((req, res) => {
    Location.findAll({
  })
    .then(locationData => res.json(locationData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => {
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

router.route('/:id')
.get((req, res) => {
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
.put((req, res) => {
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
.delete((req, res) => {
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

module.exports = router;