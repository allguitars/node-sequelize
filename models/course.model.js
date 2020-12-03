const { DataTypes, Model } = require('sequelize');
const db = require('./db');

class Course extends Model { }

Course.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseIndex: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Course',
  tableName: 'courses'
});

module.exports = Course;
