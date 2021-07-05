const express = require('express');
const app = express();
const { Pool } = require('pg');

//queries
const getAllCustomers = 'select * from customers c';
const getAllSupliers = 'select * from suppliers s';
const getAllProductsAndSupliers =  "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";

//connection setting
const pool = new Pool({
  user: 'migracode',
  host: 'localhost',
  database: 'cyf_ecommerce',
  password: '',
  port: 5432
});

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

