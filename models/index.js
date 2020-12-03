const fs = require('fs');
const path = require('path');
const db = require('./db');

db.authenticate()
  .then(() => {
    console.log('DB connection has been established successfully.');

    // Require all models to load them into the db object.
    fs.readdirSync(__dirname)
      .filter(file => file.split('.').length == 3)
      .forEach(file => require(path.join(__dirname, file)));

    // Sync the DB once the connection test is passed.
    return db.sync();

    // For Debug
    // throw new Error('Sync DB error');
  })
  .then(() => console.log('All models were synchronized successfully.'))
  .catch(err => console.log('Error:', err));
