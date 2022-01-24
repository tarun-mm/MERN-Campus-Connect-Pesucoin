var express = require('express');
var router = express.Router();
var Transaction = require('../models/models').Transaction
var PesuCoin = require('../models/models').PesuCoin

router.post('/', function(req, res, next) {
  const { email, coinsTot, coinsSpent, orderNo } = req.body;
  var coins = coinsSpent
  const transaction = new Transaction({
    email,
    coins,
    orderNo,
  });
  transaction.save((err) => {
    if (err) res.send(err);
    else {
      var incVal = 1;
      PesuCoin.updateOne(
        { email: email },
        { $set: { coins: coinsTot - coinsSpent }, $inc: { numOrders: incVal } },
        (err, docs) => {
          if(err) res.send(err)
          else res.send({ message: "Successfully booked" });
        }
      );
    }
  });
});

module.exports = router;