const router = require('express').Router();
const { EventCreated } = require('../../models');

router.route('/')
.get((req, res) => {
  EventCreated.findAll({
  })
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => {
    EventCreated.create({
        // event_name, availability and date_time set to bypass difficult
        user_id: req.session.user_id,
        event_name: req.body.event_name,
        date_time: req.body.date_time,
        sport_id: req.body.sport_id,
        members_needed: req.body.members_needed,
        location_id: req.body.location_id,
        description: req.body.description,
        availability: true
    }).then( res.json({message: 'Event Created!'}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id')
.get((req, res) => {
    EventCreated.findOne({
        where: {
        id: req.params.id
        }
    })
    .then(eventData => {
        if (!eventData) {
            res.status(404).json({ message: 'No Event found with this id to return.' });
            return;
        }
        res.json(eventData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.put((req, res) => {
    EventCreated.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(eventData => {
        if (!eventData[0]) {
            res.status(404).json({ message: 'No Event found with this id to update.' });
            return;
        }
        res.json({message: "Event has been updated"});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.delete((req, res) => {
    EventCreated.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(eventData => {
        if (!eventData) {
            res.status(404).json({ message: 'No Event found with this id to delete.' });
            return;
        }
        res.json({message: "The Event has been deleted."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;