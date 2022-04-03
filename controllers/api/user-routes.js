const router = require('express').Router();
const { User } = require('../../models');

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
    }).then( res.json({message: 'User Created!'}))
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
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id to return.' });
            return;
        }
        res.json(dbUserData);
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
    .then(dbUserData => {
        if (!dbUserData[0]) {
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
    .then(dbUserData => {
        if (!dbUserData) {
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

// router.post('/', (req, res) => {

//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password


//     // NEEDS EXTRA INFOMATION ADDED EG. DESCRIPTION, SPORTS, ETC


//   })
//   .then(userData => {

//     req.session.save(() => {

//         // Logs In here

//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.loggedIn = true;

//       res.json(userData);
//     });
//   })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post('/login', (req, res) => {
//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(userData => {
//     if (!userData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     // Password Check

//     const validPassword = userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }

//     req.session.save(() => {

//       // Session stuff

//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.loggedIn = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   });
// });

// router.put('/:id', (req, res) => {


//   // pass in req.body instead to only update what's passed through

//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(userData => {
//       if (!userData[0]) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(userData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(userData => {
//       if (!userData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(userData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post('/logout', (req, res) => {

//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   }
//   else {
//     res.status(404).end();
//   }

// });

module.exports = router;