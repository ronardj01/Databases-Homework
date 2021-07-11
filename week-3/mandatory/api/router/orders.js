const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const newOrder = 'insert into orders (order_date, order_reference, customer_id) values ($1, $2, $3)';
const verifyCustomerID = 'select * from customers c where id = $1';

//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints
//POST
router.post('/customers/:customerId/orders', async function (req, res) {
  const customerId = parseInt(req.params.customerId);
  const { order_date, order_reference, customer_id } = req.body;
  const values = [order_date, order_reference, customer_id];

  try {
    const client = await pool.connect();
    let result = await client.query(verifyCustomerID, [customerId]);

    if (result.rowCount < 1) {
      client.release();
      return res.send('CustomerID does not exists');
    }
    result = await client.query(newOrder, values);
    client.release();
    res.send('Order Created!!!');

  } catch (error) {
    console.error(error.stack);
  }
});

module.exports = router;