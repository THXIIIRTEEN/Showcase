const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const apiRouter = require('./routes/apiRouter')
const pagesRouter = require('./routes/pages')

const connectToDatabase = require('./database/connect');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cookieParser(),
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter,
  pagesRouter,
);

app.listen(PORT);
