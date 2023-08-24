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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.use(express.urlencoded({ extended: false }), routes);

app.use(cors());

routes.get('^/$|/challenger', (req, res) => {
  res.sendFile(path.resolve(__dirname, './static/html/index.html'));
});

app.use(Error);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
