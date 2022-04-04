const router = require('express').Router();
const sequelize = require('../config/connection');
const db = require('../config/vanilla');
const { User, EventCreated } = require('../models');

router.get('/', (req, res) => {
  User.findAll({ })
  .then(eventData => {
    const users = eventData.map(user => user.get({ plain: true }));

        res.render('home-page', {
          users,
          // loggedIn: req.session.loggedIn,
          // session: req.session

        });
  })
.catch(err => {

    console.log(err);

    res.status(500).json(err);

});

});

router.get('/events', (req, res) => {
    EventCreated.findAll({
      where: {
        // user_id: req.session.user_id
      },
        attributes: [
            'id',
            'event_name',
            'members_needed',
            'description',
            'user_id',
            'location_id',
            'sport_id',
        ],
    //     include: [
    //     {
    //         model: Comment,
    //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //         include: {
    //             model: User,
    //             attributes: ['username', 'id']
    //         }
    //     },
    //     {
    //         model: User,
    //         attributes: ['username']
    //     }
    //   ]
    })
    
    .then(eventData => {
        const events = eventData.map(event => event.get({ plain: true }));
  
          res.render('events-page', {
            events,
            // loggedIn: req.session.loggedIn,
            // session: req.session
  
        });
    })
    .catch(err => {

        console.log(err);

        res.status(500).json(err);

    });

});

module.exports = router;