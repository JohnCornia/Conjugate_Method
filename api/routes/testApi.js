var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json({ value: 'this is an object' });
});

module.exports = router;