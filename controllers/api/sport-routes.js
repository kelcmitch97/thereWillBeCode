const router = require('express').Router();
const { Sports } = require('../../models');

router.route('/')
.get((req, res) => {
    Sports.findAll({})
    .then(sportData => res.json(sportData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => {
    Sports.create({
        sport: req.body.sport
    }).then( res.json({message: 'Venue Type Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id')
.get((req, res) => {
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
.put((req, res) => {
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
.delete((req, res) => {
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

module.exports = router;