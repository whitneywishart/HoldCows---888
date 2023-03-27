const express = require('express');
const routes = require('./routes');

// Import sequelize connection
const sequelize = require('./config/connection.js');

// Import Express
const app = express();
const PORT = process.env.PORT || 3001;

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes files for specfic api routes  
app.use(routes);

// Sync sequelize models to the database, then turn on the server to listen
// Force false so data does not get dropped on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
