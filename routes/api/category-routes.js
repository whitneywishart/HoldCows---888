const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET routes
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name']
    }
  }).then((categoryData) => {
    res.json(categoryData);
  })
});



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['id', 'product_name']
    }
  }).then((categoryData) => {
    res.json(categoryData);
  });
});


// POST route
router.post('/', (req, res) => {
  // create a new category
  router.post('/', (req, res) => {
    Category.create(req.body)
      .then((newCategory) => {
        res.json(newCategory);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

// PUT route
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// DELETE route
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
