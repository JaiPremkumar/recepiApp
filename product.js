const express = require('express');
const { createProduct, getProduct, getSingleProduct, updateProduct, deleteProduct } = require('./productCntrl');
const routers = express.Router();

routers.route('/product/').post(createProduct)
routers.route('/product/').get(getProduct)
routers.route('/product/:id').get(getSingleProduct);
routers.route('/product/:id').put(updateProduct);
routers.route('/product/:id').delete(deleteProduct)

module.exports = routers