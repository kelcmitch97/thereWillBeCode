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
            availability: true
        }
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
          }

          // EXAMPLE Baseball Array

          if (events[i].sport_id === 2){
            baseballArray.push(events[i]);
          }

          // EXAMPLE Tennis Array

          if (events[i].sport_id === 5){
            tennisArray.push(events[i]);
          }

          // EXAMPLE Soccer Array

          if (events[i].sport_id === 4){
            soccerArray.push(events[i]);
          }

        }
        res.render('events-page', {
            basketballArray,
            baseballArray,
            hockeyArray,
            tennisArray,
            soccerArray,
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
        {
          model: User,
          through: MembersUser,
          as: 'user_applicant'
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

        const creator = true;
        const hasApplicants = true;
        const appliedUsers = event.user_applicant;

        if (appliedUsers.length === 0){

          res.render('event-page', {
            event,
            mapLink,
            creator,
            appliedUsers,
            loggedIn: req.session.loggedIn,
            session: req.session
          });

        } else {

          res.render('event-page', {
            event,
            mapLink,
            creator,
            hasApplicants,
            appliedUsers,
            loggedIn: req.session.loggedIn,
            session: req.session
          });

        }

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
  User.findOne({
    where: {
      id: req.session.user_id
    },
    include: [
      {
        model: EventCreated,
      },
      {
        model: EventCreated,
        through: MembersUser,
        as: 'event_applicant'
      },
    ],
   })
  .then(userData => {

    const user = userData.get({ plain: true });

    if (user.id === req.session.user_id){

      var events = user.eventCreateds;
      var eventsPart = user.event_applicant;
      var status = eventsPart.members_user;

      console.log(eventsPart[0].members_user.status)

      res.render('profile-page', {
        events,
        eventsPart,
        loggedIn: req.session.loggedIn,
        session: req.session
      });

    }

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
  MembersUser.findAll({
    where: {
      event_id: req.body.event_id
    }
   })
  .then(membersData =>{

    if (membersData.length === 0){

      MembersUser.create({
        user_id: req.session.user_id,
        event_id: req.body.event_id
        })

        return res.redirect('/profile');

    }

    const members = membersData.map(member => member.get({ plain: true }));

    console.log(members);

    var found = false;

    for (let i = 0; i < members.length; i++) {

      if (req.session.user_id === members[i].user_id){

        found = true;

        return res.redirect('/profile');

      } else if ((i + 1 === members.length) && (found === false)){

        MembersUser.create({
          user_id: req.session.user_id,
          event_id: req.body.event_id
          })

          return res.redirect('/profile');

      }
      
    }

  })
});

router.route('/event/update')
.put((req, res) => {
  MembersUser.update(req.body, {
      where: {
          event_id: req.body.event_id,
          user_id: req.body.user_id
      }
  })
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login-page');
});

module.exports = router;