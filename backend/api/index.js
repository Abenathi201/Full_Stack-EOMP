// const {express, routes} = require('./controller') // Note the use of .js extension for ESM
const express = require('express');
const path = require('path');

const app = express();
const port = +process.env.PORT || 5000;

// static
app.use(express.static('./static'));
// app.use(express.urlencoded({ extended: false }),routes);

// routes.get('^/$|/challenger', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './static/html/index.html'));
// });

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
