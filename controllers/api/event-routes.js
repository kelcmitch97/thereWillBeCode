const router = require('express').Router();
const { Event } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Event.findAll({
    // attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Event.findOne({
    // attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Post,
    //     attributes: ['id', 'title', 'post_url', 'created_at']
    //   },
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'created_at'],
    //     include: {
    //       model: Post,
    //       attributes: ['title']
    //     }
    //   },
    //   {
    //     model: Post,
    //     attributes: ['title'],
    //     through: Vote,
    //     as: 'voted_posts'
    //   }
    // ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;