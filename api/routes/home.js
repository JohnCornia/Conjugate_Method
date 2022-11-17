var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "conjugatemethod"
});

con.connect(function(err) {
    if (err) throw err;
    else console.log("connected to database");
});

// Load the Home page
router.get("/", function(req, res, next) {
    var query;
    var macrocycle = 1;
    var day;

    //how do I know if the user is logged in?
        //if I do know, how do I know their user_id?
    //if not logged in, return forbidden message

    //query to discover the macrocycle and day for user
    var macrocycleDayQuery = "";

    /*con.query(
        macrocycleDayQuery,
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        });*/

    //if it is day one...
    if (macrocycle == 1) {

        query =
            "SELECT     mlu.name AS main_lift, alu.name AS accessory_lifts " +
            "FROM       max_effort_upper meu " +
            
            "INNER JOIN max_effort_upper_has_main_lifts_upper jt1  " +
            "ON         meu.max_effort_upper_id = jt1.max_effort_upper_id " +
            "INNER JOIN main_lifts_upper mlu " +
            "ON         jt1.main_lifts_upper_id = mlu.main_lifts_upper_id " +
            
            "INNER JOIN max_effort_upper_has_accesory_lifts_upper jt2 " +
            "ON         meu.max_effort_upper_id = jt2.max_effort_upper_id " +
            "INNER JOIN accesory_lifts_upper alu " +
            "ON         jt2.accesory_lifts_upper_id = alu.accessory_lifts_upper_id;";
    }

    if (macrocycle == '2') {}
    if (macrocycle == '3') {}
    if (macrocycle == '4') {}

    //return the workout based on day and macrocycle
    con.query(
        query,
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });

});

// Mark the current workout as complete
router.post("/complete-workout", function(req, res, next) {
    //if day is 1, write new record to records upper
    //if day is 2, write new record to records lower
    //if day is 4, increment macrocycle by 1
        //set day to to 1
        //if macrocycle is at 3, set to 1
            //if macrocycle is at 3, delete all workouts
    //else, increment day by one
});

module.exports = router;