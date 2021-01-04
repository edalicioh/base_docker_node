require('dotenv').config({
  path: process.env.APP_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
