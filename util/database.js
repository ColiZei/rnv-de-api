const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rnv-api', 'rnv-api', 'this_is_pw', {
  dialect: 'mysql',
  host: 'localhost',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, testConnection };
