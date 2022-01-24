var express = require('express');
var router = express.Router();
var Contact = require('../models/models').Contact

router.post('/', function(req, res, next) {
  const { name, sem, email, query } = req.body;

  const contact = new Contact({
    name,
    sem,
    email,
    query,
  });
  contact.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Your Query has been submitted" });
    }
  });
});

module.exports = router;