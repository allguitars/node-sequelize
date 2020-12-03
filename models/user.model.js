const { DataTypes, Model } = require('sequelize');
const db = require('./db');

class User extends Model { }

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users'
});

module.exports = User;
