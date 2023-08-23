const express = require('express');
const bodyParser = require('body-parser');
const {verifyAToken} = require('../middleware/authentication')
const routes = express.Router();

// Importing the models to use its database functions
const {products, users} = require('../models')

/*========== USERS Routes ==========*/

// Get all users route
routes.get('/users', (req, res) => {
    users.getUsers(req, res)
})

// Get a single user route
routes.get('/users/:id', (req, res) => {
    users.getUser(req, res)
})

// Add a user route
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})

// Add a user route
routes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res)
})

// Update a single route route
routes.put('/users/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

// routes.patch('/products/:id', bodyParser.json(), (req, res) => {
//     products.updateProduct(req, res)
// })

// Delete a users route
routes.delete('/users/:id', (req, res) => {
    users.deleteUser(req, res)
})

/*========== USERS Routes ==========*/

//=========================================================================================

/*========== Products Routes ==========*/

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
// routes.put('/products/:id', bodyParser.json(), (req, res) => {
//     products.updateProduct(req, res)
// })

// Update a single route route
routes.patch('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
})

// Delete a product route
routes.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res)
})

/*========== Products Routes ==========*/


module.exports = {
    express,
    routes,
    verifyAToken
}