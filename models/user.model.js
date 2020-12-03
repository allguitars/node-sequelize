const { DataTypes, Model } = require('sequelize');
const db = require('./db');

/**
 * Using sequelize.define
 */
const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

/**
 * Extending Model
 */
// class User extends Model { }

// User.init({
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize: db,
//   modelName: 'User',
//   tableName: 'users'
// });

module.exports = User;
