require('dotenv').config();
module.exports = {
  'development': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': "guestsDb",
    'host': "localhost",
    'port': 3306,
    'dialect': 'mysql'
  },
  'production': {
    'use_env_variable': 'JAWSDB_URL',
    'dialect': 'mysql'
  }
};