const Products = require('./products');
const Users = require('./users');

// Export classes
module.exports = {
    products: new Products(),
    users: new Users(),
}