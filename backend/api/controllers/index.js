const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

// Importing the models to use its database functions
const {products} = require('../models')

/*========== Products Routes ==========*/

// Get all products route
routes.get('/products', (req, res) => {
    products.getProducts(req, res)
})

// Get a single product route
routes.get('/products/:id', (req, res) => {
    products.getProduct(req, res)
})

// Add a product route
routes.post('/add-product', bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
})

// Update a single route route
routes.put('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
})

// routes.patch('/products:/id', bodyParser.json(), (req, res) => {
//     products.updateProduct(req, res)
// })

// Delete a product route
routes.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res)
})

/*========== Products Routes ==========*/

module.exports = {
    express,
    routes
}