var express = require('express');
var router = express.Router();

/* GET sessions listing. */
router.get('/:id', function(req, res, next) {
  res.render('questions', { id: req.params.id});
  //res.send('respond with a resource ' +  req.params.id);
});

module.exports = router;
