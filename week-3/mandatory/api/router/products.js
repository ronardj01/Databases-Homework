const express = require('../../../../week-2/mandatory/api/node_modules/express');
const router = express.Router();

//Queries
const getAllProductsAndSupliers = "select p.product_name, s.supplier_name from products p inner join suppliers s on p.supplier_id = s.id";


//Connecting to the Database
const pool = require('../utils/poolConect');

//Endpoints
router.get('/', function (req, res) {
  pool.query(getAllProductsAndSupliers, (err, result) => {
    res.json(result.rows)
  });
});

//Export Modules
module.exports = router;
