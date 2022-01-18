const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const {products} = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'shop'
  console.log(products);
  res.render('shop', {products, title})
});

module.exports = router;
