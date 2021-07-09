const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const getAllProductsAndSupliers = "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";
const productByName = "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id where p.product_name like '%' || $1 || '%'";

//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints
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

//Export Modules
module.exports = router;
