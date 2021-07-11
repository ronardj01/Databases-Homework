const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const getAllSupliers = 'select * from suppliers s';

//Connecting to the Database
//Search all supliers
const pool = require('../utils/poolConect');

router.get('/', function (req, res) {
    pool.query(getAllSupliers, (err, result) => {
      res.json(result.rows)
    });
  });

module.exports = router;