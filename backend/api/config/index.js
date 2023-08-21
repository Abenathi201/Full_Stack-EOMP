const {createPool} = require('mysql');
require('dotenv').config();

// Data Base Connection
const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30
})

connection.query('SELECT 1', (error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
    } else {
        console.log('Connected to the database!');
    }
});

module.exports = connection