const { Pool } = require('../../../../week-2/mandatory/api/node_modules/pg');
require('dotenv').config();

//connection setting
const pool1 = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
  });

  module.exports = pool1;