const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
//GET
const getAllProductsAndSupliers = "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";
const productByName = "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id where p.product_name like '%' || $1 || '%'";

//POST
const suplierByID = 'select * from suppliers s where id = $1';
const newProduct = 'insert into products (product_name, unit_price, supplier_id) values ($1, $2, $3)';

//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints (GET)
//Search all products name and suplier name * also can filter by product name using params*
router.get('/', function (req, res) {
  const productName = req.query.name

  let value = [];
  let query = getAllProductsAndSupliers;

  if (productName) {
    value = [productName];
    query = productByName;
  }
  pool.query(query, value, (err, result) => {
    res.json(result.rows)
  });
});

//EndPoints (POST)
router.post('/', async function (req, res) {
  const { product_name, unit_price, supplier_id } = req.body;
  const values = [product_name, unit_price, supplier_id];

  const negativePrice = unit_price <= 0;

  if (negativePrice) {
    return res.send('Price must be larger than 0')
  }
  try {
    const client = await pool.connect();
    let result = await client.query(suplierByID, [supplier_id]);

    if (result.rowCount <= 0) {
      client.release();
      return res.send('Suplier id does not exists');
    }

    result = await client.query(newProduct, values);
    client.release();
    return res.send('Added new Product!!');

  } catch (error) {
    console.error(error.stack)
  }
});

//Export Modules
module.exports = router;
