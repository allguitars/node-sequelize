const { DataTypes, Sequelize, Model } = require('sequelize');
const db = require('./db');

/**
 * Using sequelize.define
 */
const ApiKey = db.define('ApiKey', {
  id: {
    type: DataTypes.UUID,
    // defaultValue: sequelize.literal('gen_random_uuid()'),
    defaultValue: Sequelize.UUIDV4, // gen_random_uuid() returns a version 4 UUID.
    allowNull: false,
    primaryKey: true
  },
  key: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(['Active', 'Suspended']),
    defaultValue: 'Active',
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(['SUPERADMIN', 'ADMIN', 'VIEW']),
    defaultValue: 'ADMIN',
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'apikeys',
  timestamps: false
});

/**
 * Extending Model
 */
// class ApiKey extends Model { }

// ApiKey.init({
//   id: {
//     type: DataTypes.UUID,
//     // defaultValue: sequelize.literal('gen_random_uuid()'),
//     defaultValue: Sequelize.UUIDV4, // gen_random_uuid() returns a version 4 UUID.
//     allowNull: false,
//     primaryKey: truex
//   },
//   key: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   },
//   status: {
//     type: DataTypes.ENUM(['Active', 'Suspended']),
//     defaultValue: 'Active',
//     allowNull: false
//   },
//   role: {
//     type: DataTypes.ENUM(['SUPERADMIN', 'ADMIN', 'VIEW']),
//     defaultValue: 'ADMIN',
//     allowNull: false
//   },
//   creationTime: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//     allowNull: false
//   },
//   lastModified: {
//     type: DataTypes.DATE
//   },
//   username: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   }
// }, {
//   sequelize: db,
//   modelName: 'ApiKey',
//   tableName: 'apikeys',
//   timestamps: false
// });

module.exports = ApiKey;
