var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.json({
 	a:1,
 	b:2
 })
});

module.exports = router;
