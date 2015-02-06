/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');


var app = express();
// all environments
app.set('env', 'development'); //production
app.set('port', process.env.PORT || 3000, null);
app.set('views', path.join(__dirname, 'views'), null);

app.use(express.favicon('public/imgs/icon/somgle.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());


app.configure('production', function () {
  app.use(express.static(path.join(__dirname, 'dist')));
});
app.configure('development', function () {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler());
});


http.createServer(app).listen(app.get('port'), function () {
  var info = 'Express server start in ' + app.get('env') +
    ' model & listening on port ' + app.get('port');
  console.log(info);
});

app.get('/', function (req, res) {
  //默认是返回index的

});

app.get('/reg', function (req, res) {
  res.sendfile(__dirname +'/public/tpl/reg.html', {}, null);
});

app.use(express.logger('dev'));