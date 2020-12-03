const { DataTypes, Model } = require('sequelize');
const db = require('./db');

/**
 * Using sequelize.define
 */
const Course = db.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  courseIndex: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'courses',
  timestamps: false
});

/**
 * Extending Model
 */
// class Course extends Model { }

// Course.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   courseIndex: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize: db,
//   modelName: 'Course',
//   tableName: 'courses'
// });

module.exports = Course;
