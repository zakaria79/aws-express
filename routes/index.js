var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  // res.render('zakaria');
  res.sendFile('index.html');
  // res.render('index', {title: 'Express'});
});

router.get('/zakaria', (req, res, next) => {
  res.render('zakaria', {title: 'Zakaria'});
});

module.exports = router;
