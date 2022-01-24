var express = require('express');
var router = express.Router();
var User = require('../models/models').User
var PesuCoin = require('../models/models').PesuCoin

router.post('/', function(req, res, next) {
  const { name, email, password } = req.body;
  var coins = 500,
    numOrders = 0;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) res.send(err);
        else {
          const pesuCoin = new PesuCoin({
            email,
            coins,
            numOrders,
          });
          pesuCoin.save((err) => {
            if (err) res.send(err);
            else {
              res.send({
                message: "Successfully Registered, Please login now",
              });
            }
          });
        }
      });
    }
  });
});

module.exports = router;