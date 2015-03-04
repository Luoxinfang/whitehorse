/*
 * GET home page.
 */
module.exports = function (app) {
  var appInfo = require('./app_info');
  app.get('/', function (req, res) {
    res.render('index', {app: appInfo});

  });
  app.get('/reg', function (req, res) {
    res.render('reg', {app: appInfo});
  });

  app.get('/login', function (req, res) {
    res.render('login', {app: appInfo});
  });

};