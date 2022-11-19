var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');


//signup
router.post("/signup", function(req, res, next) {
    
    //save email
    //encrypt password and write to db
    /*bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });*/
    console.log(req.body);
    
    //assign macrocycle id 
        //set macrocycle count to 1
        //set day to 1
        //create all new randomized workouts
});

//login
router.post("/login", function(req, res, next) {
    // Load hash from your password DB.
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
    });
});

//change email
router.post("/update-email", function(req, res, next) {});

//change password
router.get("/update-password", function(req, res, next) {});

module.exports = router;