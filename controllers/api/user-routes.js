const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.route('/')
.get((req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
.post((req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(dbUserData => {

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.description = dbUserData.description;
            req.session.loggedIn = true;
        
            // res.json(dbUserData);
          });

        res.json({message: 'User Created!'})
    
    
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.route('/:id')
.get((req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
        id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id to return.' });
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.put((req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id to update.' });
            return;
        }
        res.json({message: "User has been updated"});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
.delete((req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id to delete.' });
            return;
        }
        res.json({message: "The user has been deleted."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username...' });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.description = dbUserData.description;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

module.exports = router;