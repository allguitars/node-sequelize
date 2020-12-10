const fs = require('fs');
const path = require('path');
const db = require('../models/db');

module.exports = function () {
  db.authenticate()
    .then(() => {
      console.log('DB connection has been established successfully.');

      // Load all modules into the db object.
      fs.readdirSync(__dirname + '/../models/')
        .filter(file => file.split('.').length === 3)
        .forEach(file => require(path.join(__dirname + '/../models/', file)));

      // Sync the DB.
      return db.sync();

      // For Debug
      // throw new Error('Sync DB error');
    })
    .then(() => console.log('All models were synchronized successfully.'))
    .catch(err => console.log('Error:', err));
}
