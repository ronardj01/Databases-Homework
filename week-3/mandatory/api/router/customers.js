const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const getAllCustomers = 'select * from customers c';

//Connecting to the Database
const pool = require('../utils/poolConect');

router.get('/', function (req, res) {
    pool.query(getAllCustomers, (err, result) => {
      res.json(result.rows)
    });
  });

module.exports = router;