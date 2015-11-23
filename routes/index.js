var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: "Falcon Equity Partners LLP"});
})

router.get('/clientcompanies', function(req, res, next) {
  res.render('clientCompanies', {title: "Client Companies"})
})

router.get('/team', function(req, res, next) {
  res.render('team', {title: "Team"})
})
module.exports = router;
