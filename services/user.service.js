const User = require('../models/user.model');

/**
 * Get all users
 */
exports.getUsers = async function () {

  try {
    const users = await User.findAll();

    if (users.every(user => user instanceof User)) {
      console.log('All rows are valid.');
    }

    console.log('All users:', JSON.stringify(users, null, 2));

    return users;
  } catch (e) {
    throw new Error('Error while getting all users.');
  }
}

/**
 * Add a user
 */
exports.addUser = async function () {
  try {
    const user = await User.create({
      firstName: 'Dave',
      lastName: 'Lee'
    });
    console.log('A user has been added:', user);

    return user;
  } catch (e) {
    throw new Error('Unable to add the user.');
  }
}