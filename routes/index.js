var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
/* GET Sciences */
router.get('/Sciences', function(req, res) {
    res.render('Sciences.jade', { title: 'Sciences' });
});

module.exports = router;
