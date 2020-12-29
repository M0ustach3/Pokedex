let router = require('express').Router();
const items = require('../database/database').getItems()


router.get('/', function (req, res) {
    res.send(items);
});

module.exports = router;