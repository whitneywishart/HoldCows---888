const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET routes
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name']
    }
  }).then((tagData) => {
    res.json(tagData);
  })
});

// get one tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['id', 'product_name']
    }
  }).then((tagData) => {
    res.json(tagData);
  });
});



// POST route
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
      tag_name: req.body.tag_name,
    }
  )
    .then((newTag) => {
      // Send the newly created row as a JSON object
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});





// PUT route
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});






router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
