var express = require('express');
var router = express.Router();
var Space = require('../models/models').Space

router.post('/', function(req, res, next) {
  Space.find({}, (err, docs) => {
    // console.log(docs)
    if (err) console.log(err);
    else res.send({ spaces: docs });
  });
});

module.exports = router;