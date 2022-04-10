const router = require('express').Router();
const { EventCreated } = require('../../models');

router.route('/') //Basic routes for event entries.
.get((req, res) => { //Get all events.
  EventCreated.findAll({
  })
    .then(eventData => res.json(eventData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => { //Create an event.
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

router.route('/:id') //Routes to modify a single event entry.
.get((req, res) => { //Get a single event.
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
.put((req, res) => { //Update a single event.
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
.delete((req, res) => { //Delete a single event.
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
//Exporting the routes.
module.exports = router;