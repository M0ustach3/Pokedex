const router = require('express').Router();
const moves = require('../database/database').getMoves();


router.get('/', function(req, res) {
  res.send(moves);
});

module.exports = router;
