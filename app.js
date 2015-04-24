/*
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../Downloads/Tightrope.db');

//SELECT OPERATION
db.all("SELECT id AS Secondary, info FROM Art", function(err,rows){
    console.log(rows.info);
});

db.close();
*/

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../Downloads/Tightrope.db');


var stmt = "SELECT Secondary, Career, Famous FROM Economics";
db.each(stmt, function(err, row) {

//
// print out results
//
console.log(row.Secondary + " " + row.Career + ", " + row.Famous + "\n");

});

db.close();

