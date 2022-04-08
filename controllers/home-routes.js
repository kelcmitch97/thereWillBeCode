const router = require('express').Router();
const sequelize = require('../config/connection');
const db = require('../config/vanilla');
const { User, EventCreated, MembersUser, Location, Sports } = require('../models');

router.get('/', (req, res) => {
  User.findAll({ })
  .then(userData => {
    
        res.render('home-page', {
          loggedIn: req.session.loggedIn,
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

        var basketballArray = []
        var baseballArray = []
        var hockeyArray = []
        var tennisArray = []
        var soccerArray = []
        
        for (let i = 0; i < events.length; i++) {

          // EXAMPLE Basketball Array
          
          if (events[i].sport_id === 3){

            basketballArray.push(events[i]);

          }

          // EXAMPLE Hockey Array

          if (events[i].sport_id === 1){

            hockeyArray.push(events[i]);
            // console.log(hockeyArray);

          }

          // EXAMPLE Baseball Array

          if (events[i].sport_id === 2){

            baseballArray.push(events[i]);
            // console.log(baseballArray);

          }

          // EXAMPLE Tennis Array

          if (events[i].sport_id === 5){

            tennisArray.push(events[i]);
            // console.log(tennisArray);

          }

          // EXAMPLE Soccer Array

          if (events[i].sport_id === 4){

            soccerArray.push(events[i]);
            // console.log(soccerArray);

          }
          
        }
  
          res.render('events-page', {
            basketballArray,
            baseballArray,
            hockeyArray,
            tennisArray,
            soccerArray,
            // loggedIn: req.session.loggedIn,
            // session: req.session
  
        });
    })
    .catch(err => {

        console.log(err);

        res.status(500).json(err);

    });

});

router.get('/event/:id', (req, res) => {
  EventCreated.findOne({
    where: {
      id: req.params.id
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
      include: [
        {
          model: Location,
          attributes: ['location_name', 'location_address', 'city_name'],
        },
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Sports,
          attributes: ['sport'],
        },
      ],
  })
  
  .then(eventData => {

    const event = eventData.get({ plain: true });

    var mapLink = [];
    const addressSplit= event.location.location_address.split(',')[0];
    const mapDataRaw = `${addressSplit}, ${event.location.city_name}`;
    const mapData = mapDataRaw.replaceAll(' ', '%20');
    mapLink.push(mapData);

      if (event.user_id === req.session.user_id){

        var appliedUsers = [];

        const sql = `SELECT * FROM members_user WHERE event_id = ?`;
        const params = event.id;

        db.query(sql, params, (err, results) => {

          var userAmount = results.length;

          if (results.length === 0){

            // Render if the user is the creator, but no applied users 

            res.render('event-page', {
              event,
              mapLink,
              loggedIn: req.session.loggedIn,
              session: req.session
            });

          } else {

            for (let i = 0; i < results.length; i++) {
              
              const sql = `SELECT * FROM user WHERE id = ?`;
              const params = results[i].user_id;

              db.query(sql, params, (err, results) => {

                appliedUsers.push(results[0])

                if (i + 1 === userAmount){

                  console.log(appliedUsers)

                  // Render for if the user is the creator AND has applied users

                  res.render('event-page', {
                    event,
                    mapLink,
                    appliedUsers,
                    loggedIn: req.session.loggedIn,
                    session: req.session
                  });

                }

              })
              
            }

          }

        })

      } else {

        // Render If the user visiting is not creator

        res.render('event-page', {
          event,
          mapLink,
          loggedIn: req.session.loggedIn,
          session: req.session
        });

      }

  })
  .catch(err => {

      console.log(err);

      res.status(500).json(err);

  });

});

router.get('/create-event', (req, res) => {
  EventCreated.findAll({ })
  .then(eventData => {

    const events = eventData.map(user => user.get({ plain: true }));

        res.render('create-event', {

          // loggedIn: req.session.loggedIn,
          // session: req.session

        });
  })
.catch(err => {

    console.log(err);

    res.status(500).json(err);

});

});

router.get('/profile', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
}
  EventCreated.findAll({ 
    where: {
      user_id: req.session.user_id
    },
    // attributes: [
    //   'id',
    //   'event_name',
    //   'members_needed',
    //   'description',
    //   'user_id',
    //   'location_id',
    //   'sport_id',
    // ],
    // include: [
    //       // {
    //       //   model: Comment,
    //       //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       //   include: {
    //       //       model: User,
    //       //       attributes: ['username', 'id']
    //       //   }
    //       // },
    //       // {
    //       //   model: User,
    //       //   attributes: ['username']
    //       // }
    //     ]
   })
  .then(eventData => {

    const events = eventData.map(user => user.get({ plain: true }));
    var eventsPart = [];

    const sql = `SELECT * FROM members_user WHERE user_id = ?`;
    const params = req.session.user_id;

    db.query(sql, params, (err, results) => {

      if (results.length === 0) {

        res.render('profile-page', {
          events,
          session: req.session
        });

      } else {

        dataAmount = results.length;

        for (let i = 0; i < results.length; i++) {
          
          const sql = `SELECT * FROM eventcreated WHERE id = ?`;
          const params = results[i].event_id;

          db.query(sql, params, (err, results) => {

            eventsPart.push(results[0]);

            if (i + 1 === dataAmount){
  
              res.render('profile-page', {
                events,
                eventsPart,
                session: req.session
              });
  
            }

          })

        }

      }

    });
        
  })
});

router.get('/about', (req, res) => {

  res.render('about-page');

});

router.get('/contact', (req, res) => {

  res.render('contact-page');

});

router.route('/join-event')
.post((req, res) => {
  MembersUser.create({
      user_id: req.session.user_id,
      event_id: req.body.event_id
  }).then( res.json({message: 'Event Joined!'}))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login-page');
});

module.exports = router;