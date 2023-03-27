// Allows us to spread out all our references files and 'route' them as expected 
const router = require('express').Router();
const apiRoutes = require('./api');

// Middleware - prefix all routes defined in the api directory with '/api'
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;