var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('coolsite.ejs', { title: 'My New Website' });
});

module.exports = router;
