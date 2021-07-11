const express = require('express');
const app = express();
const productsRouter = require('../../../week-3/mandatory/api/router/products');
const customersRouter = require('../../../week-3/mandatory/api/router/customers');
const supliersRouter = require('../../../week-3/mandatory/api/router/supliers');
const ordersRouter = require('../../../week-3/mandatory/api/router/orders');

app.use(express.json());
app.use(express.urlencoded());

//queries
//const getAllCustomers = 'select * from customers c';
//const getAllSupliers = 'select * from suppliers s';
//const getAllProductsAndSupliers =  "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";

//Connecting to the Database
//const pool = require('../../../week-3/mandatory/api/utils/poolConect')

//enpoints
/* app.get('/customers', function (req, res) {
  pool.query(getAllCustomers, (err, result) => {
    res.json(result.rows)
  });
}); */

/* app.get('/supliers', function (req, res) {
  pool.query(getAllSupliers, (err, result) => {
    res.json(result.rows)
  });
}); */

/* app.get('/products', function (req, res) {
  pool.query(getAllProductsAndSupliers, (err, result) => {
    res.json(result.rows)
  });
}); */

app.use('/', ordersRouter);
app.use('/customers', customersRouter);
app.use('/products', productsRouter);
app.use('/supliers', supliersRouter);

app.listen(3000, function () {
  console.log('Server listening on port 3000')
});

