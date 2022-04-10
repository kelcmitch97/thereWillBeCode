const router = require('express').Router();
const { Sports } = require('../../models');

router.route('/') //Basic routes for sports entries.
.get((req, res) => { //Get all sports.
    Sports.findAll({})
    .then(sportData => res.json(sportData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => { //Create a sports.
    Sports.create({
        sport: req.body.sport
    }).then( res.json({message: 'Venue Type Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id') //Routes to modify a single sport entry.
.get((req, res) => { //Get a single sport.
    Sports.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(sportData => {
        if (!sportData) {
            res.status(404).json({ message: 'No sport type found with this id to return.' });
            return;
        }
        res.json(sportData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.put((req, res) => { //Update a single sport.
    Sports.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(sportData => {
        if (!sportData[0]) {
            res.status(404).json({ message: 'No sport type found with this id to update.' });
            return;
        }
        res.json({message: "Venue type has been updated"});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.delete((req, res) => { //Delete a single sport.
    Sports.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(sportData => {
        if (!sportData) {
            res.status(404).json({ message: 'No sport type found with this id to delete.' });
            return;
        }
        res.json({message: "The sport type has been deleted."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Exporting the routes.
module.exports = router;