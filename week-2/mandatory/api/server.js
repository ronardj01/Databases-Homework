const express = require('express');
const app = express();

//queries
const getAllCustomers = 'select * from customers c';
const getAllSupliers = 'select * from suppliers s';
const getAllProductsAndSupliers =  "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";

//Connecting to the Database
const pool = require('../../../week-3/mandatory/api/utils/poolConect')

//enpoints
app.get('/customers', function (req, res) {
  pool.query(getAllCustomers, (err, result) => {
    res.json(result.rows)
  });
});

app.get('/supliers', function (req, res) {
  pool.query(getAllSupliers, (err, result) => {
    res.json(result.rows)
  });
});

app.get('/products', function (req, res) {
  pool.query(getAllProductsAndSupliers, (err, result) => {
    res.json(result.rows)
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000')
});

