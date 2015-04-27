/*
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../Downloads/Tightrope.db');

//SELECT OPERATION
db.all("SELECT id AS Secondary, info FROM Art", function(err,rows){
    console.log(rows.info);
});

db.close();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./Tightrope.db');


var stmt = "SELECT Secondary, Career, Famous FROM Economics";
db.each(stmt, function(err, row) {

//
// print out results
//
console.log(row.Secondary + " " + row.Career + ", " + row.Famous + "\n");

});

db.close();

*/

var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app;
