const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries 
//GET
const getAllCustomers = 'select * from customers c';
const customerByID = 'select * from customers c where id = $1';

//POST
const newCustomer = 'insert into customers (name, address, city, country) values ($1, $2, $3, $4)';

//PUT 
const updateCustomer = 'update customers set name = $1, address = $2, city = $3, country = $4 where id = $5';

//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints (GET)
//Search customer by Id
router.get('/:customerID', async function (req, res) {
  const customerID = req.params.customerID;
  try {
    const result = await pool.query(customerByID, [customerID]);
    res.json(result.rows);
  } catch (error) {
    console.error(error.stack)
  }
});

//Search all customer
router.get('/', function (req, res) {
  pool.query(getAllCustomers, (err, result) => {
    res.json(result.rows)
  });
});

//Endpoints (POST)
//Crete a new customer
router.post('/', async function (req, res) {
  const { name, address, city, country } = req.body;
  const values = [name, address, city, country];

  try {
    const result = await pool.query(newCustomer, values);
    res.send('New Customer Created!!')
  } catch (error) {
    console.error(error.stack)
  }
});

//Endpoints (PUT)
//Update an existing customer
router.put('/:customerID', async function (req, res) {
  const customerID = req.params.customerID;
  const { name, address, city, country } = req.body;
  const values = [name, address, city, country, customerID];

  try {
    const result = await pool.query(updateCustomer, values);
    res.send('Customer updated!!!')
  }catch(error){
    console.error(error.stack);
  }
});

module.exports = router;