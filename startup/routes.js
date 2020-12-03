const express = require('express');
const home = require('../routes/home');
const UsersRoute = require('../routes/users.route');

module.exports = function (app) {
  app.use(express.json());
  app.use('/', home);
  app.use('/api/users', UsersRoute);
};