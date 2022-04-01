const router = require('express').Router();
const { Location } = require('../../models');

// get all users
router.get('/', (req, res) => {

  Location.findAll({})

    .then(locationData => res.json(locationData))

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {

  Location.findOne({

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

    .then(locationData => {

      if (!locationData) {
        res.status(404).json({ message: 'No location found with this id' });
        return;
      }

      res.json(locationData);

    })

    .catch(err => {

      console.log(err);

      res.status(500).json(err);

    });
    
});

module.exports = router;