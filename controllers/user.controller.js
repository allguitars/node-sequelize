const UserService = require('../services/user.service');

exports.getUsers = async function (req, res, next) {
  // TODO: Validate the request parameters

  // Call service
  try {
    const users = await UserService.getUsers();

    return res.status(200).send(users);
  } catch (e) {
    // Process the errors with different codes
    return res.status(400);
  }
}

exports.addUser = async function (req, res, next) {
  // TODO: Validate the request parameters

  try {
    const user = await UserService.addUser();

    return res.status(200).send(user);
  } catch (e) {
    // Process the errors with different codes
    return res.status(400).send('Error while adding the user.');
  }
}