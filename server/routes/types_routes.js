const router = require('express').Router();
const types = require('../database/database').getTypes();


router.get('/', function(req, res) {
  res.send(types);
});

module.exports = router;
