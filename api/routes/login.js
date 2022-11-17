var express = require("express");
var router = express.Router();


//signup
router.post("/signup", function(req, res, next) {});

//login
router.post("/login", function(req, res, next) {});

//change email
router.post("/update-email", function(req, res, next) {});

//change password
router.get("/update-password", function(req, res, next) {});

module.exports = router;