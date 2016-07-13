function api(app) {
  app.use('/api/css', require('./css'));
}

module.exports = api;
