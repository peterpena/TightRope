var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
/* GET Sciences */
router.get('/Sciences', function(req, res) {
var connectionString = "postgres://jfqjkcbhwdpwdq:vz08wqLJeLCCoFhlXniibELjua@ec2-23-21-140-156.compute-1.amazonaws.com:5432/dbecceof5l8kj9";
var pg = require('pg');
  pg.connect(connectionString, function(err, client, done) {
      if(err)
      {console.error("Pedro " + err);}
      else
	  {console.error("Connected");}
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
	{ res.render('Sciences.jade', {Results: result.rows});}
    });
  });
});
/* GET Arts */
router.get('/Arts', function(req, res) {
    res.render('Arts.jade', { title: 'Arts' });
});
/* GET Languages */
router.get('/Languages', function(req, res) {
    res.render('Languages.jade', { title: 'Languages' });
});
/* GET SocialStudies */
router.get('/SocialStudies', function(req, res) {
    res.render('SocialStudies.jade', { title: 'SocialStudies' });
});

module.exports = router;
