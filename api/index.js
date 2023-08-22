const {express, routes} = require('./controllers');
const cors = require('cors');
const Error = require('./middleware/ErrorHandling')
// const express = require('express');
// const routes = require('./controllers');
const path = require('path');

const app = express();
const port = +process.env.PORT || 5000;

// static
app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }),cors(), routes);

routes.get('^/$|/challenger', (req, res) => {
  res.sendFile(path.resolve(__dirname, './static/html/index.html'));
});

app.use(Error);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
