var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/private', function(req, res, next) {
  res.render('private');
});
router.get('/common', function(req, res, next) {
  res.render('common');
});



module.exports = router;
