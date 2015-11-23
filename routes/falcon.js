var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Falcon Capital Index Page' });
});

router.get('/falcon', function(req, res, next) {
    res.render('falcon/homepage', {title: "Falcon Capital"});
});






















module.exports = router;