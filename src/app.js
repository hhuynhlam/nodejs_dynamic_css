const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

const mode = process.env.NODE_ENV || 'development';
const app = express();

//------------------------------------
// Middleware
//------------------------------------

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//------------------------------------
// Route Definitions
//------------------------------------

require('./api')(app);

app.use('/*', (req, res) => {
  res.sendStatus(404);
});

//------------------------------------
// Error Handler
//------------------------------------

if (mode === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.render('error', {
      message: err.message,
      error: err
    });
  });
} else {
  app.use((err, req, res) => {
    res.status(err.status || 500);
  });
}

module.exports = app;
