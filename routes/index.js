var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});
router.get('/download/:name', function(req, res, next) {
  var name = req.params.name;
  res.sendFile(path.join(__dirname, '..', 'public', 'images', name+'.jpg'));
});
module.exports = router;
