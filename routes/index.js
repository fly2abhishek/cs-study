var express = require('express');
var router = express.Router();
var dir = require('node-dir');
var path = require('path');

var sessions = dir.files('sessions/slides', {sync:true , shortName: true});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'CS Study', sessions: sessions.map(function(filename) {
      return path.parse(filename).name;;
    })});
});

module.exports = router;
