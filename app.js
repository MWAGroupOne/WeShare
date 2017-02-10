var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var app = express();
var fs = require('fs');
var helmet = require('helmet');
var evalidator = require('express-validator');
var cors = require('cors');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client')));

app.use(express.static(__dirname + '/client'));

app.options('*', cors());

var index = require('./routes/index');
var states = require('./routes/states');
var items = require('./routes/items');
var item = require('./routes/item');
var users = require('./routes/users');
var cities = require('./routes/cities');
var additem = require('./routes/additem');
var saveuser = require('./routes/saveuser');
var signin = require('./routes/signin');
var nearitems = require('./routes/nearitems');

app.use('/', index);
app.use('/home', states);
app.use('/states', states);
app.use('/items', items);
app.use('/item', item);
app.use('/cities', cities);
app.use('/additem', additem);
app.use('/saveuser', saveuser);
app.use('/signin', signin);
app.use('/nearitems', nearitems);

// error handler
app.use(function (err, req, res, next) {
  //CORS restriction suppression
  require('./routes/corssecure.js').corsecure(res);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(4201, function () {
  console.log("Server listening on port 4201");
});

module.exports = app;
