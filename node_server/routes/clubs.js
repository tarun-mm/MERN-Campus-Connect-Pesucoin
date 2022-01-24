var express = require('express');
var router = express.Router();
var Club = require('../models/models').Club;

router.post('/', function(req, res, next) {
  Club.find({}, (err, docs) => {
    if (err) console.log(err)
    else res.send({ clubs: docs })
  })
});

module.exports = router;