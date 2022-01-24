var express = require('express');
var router = express.Router();
var Transaction = require('../models/models').Transaction

router.post('/', function(req, res, next) {
  const { email } = req.body
  
  Transaction.find({ email: email }, (err, docs) => {
    // console.log(docs)
    if (err) console.log(err);
    else res.send({ transactions: docs });
  });
});

module.exports = router;