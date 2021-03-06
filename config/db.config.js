const dbConfig = {
  dialect: 'postgres',
  database: 'test',
  username: 'ruckus',
  password: 'ruckus',
  host: '192.168.70.2',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = dbConfig;
