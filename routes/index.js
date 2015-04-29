var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
/* GET Sciences */
router.get('/Sciences', function(req, res) {
    res.render('Sciences.jade', { title: 'Sciences' });

var pg = require('pg');
router.get('/db', function (request, response) {
  var connectionString = "postgres://jfqjkcbhwdpwdq:vz08wqLJeLCCoFhlXniibELjua@ec2-23-21-140-156.compute-1.amazonaws.com:5432/dbecceof5l8kj9"
  pg.connect(connectionString, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
})
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
