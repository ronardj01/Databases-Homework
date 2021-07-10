const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const getAllCustomers = 'select * from customers c';
const customerByID = 'select * from customers c where id = $1';

//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints
//Search customer by Id
router.get('/:customerID', async function (req, res) {
  const customerID = req.params.customerID;
  try{
    const result = await pool.query(customerByID, [customerID]);
    res.json(result.rows);
  }catch(error) {
    console.error(error.stack)
  }
});

//Search all customer
router.get('/', function (req, res) {
    pool.query(getAllCustomers, (err, result) => {
      res.json(result.rows)
    });
  });



module.exports = router;