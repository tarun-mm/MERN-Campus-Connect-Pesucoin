var express = require('express');
var router = express.Router();
var PesuCoin = require('../models/models').PesuCoin

router.post('/', function(req, res, next) {
  const { email } = req.body;
  PesuCoin.findOne({ email: email }, (err, user) => {
    // console.log(user)
    if (user)
      res.send({
        message: "PesuCoin connected",
        coins: user["coins"],
        numOrders: user["numOrders"],
      });
    else res.send({ message: "User not existing" });
  });
});

module.exports = router;