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
    
    var mainLiftQuery;
    var accessoryLiftsQuery;
    const workout = new Object();
    
    //query to discover the user's day and macrocycle
    var macrocycleDayQuery =
        "SELECT     mc.count AS macrocycle, mc.day AS day " +
        "FROM       macrocycle mc " +
        "INNER JOIN user u " +
        "ON         u.macrocycle_id = mc.macrocycle_id " +
        "WHERE      u.user_id='1';";
    
    con.query(
        macrocycleDayQuery,
        function(err, result, fields) {
            if (err) throw err;
            
            console.log(result);
            
            workout.day = result[0].day;
            workout.macrocycle = result[0].day;

            if (workout.day == 1) {

                mainLiftQuery =
                    "SELECT     mlu.name AS main_lift " +
                    "FROM       max_effort_upper meu " +
        
                    "INNER JOIN max_effort_upper_has_main_lifts_upper jt1  " +
                    "ON         meu.max_effort_upper_id = jt1.max_effort_upper_id " +
                    "INNER JOIN main_lifts_upper mlu " +
                    "ON         jt1.main_lifts_upper_id = mlu.main_lifts_upper_id;";
        
                accessoryLiftsQuery =
                    "SELECT alu.name AS accessory_lift " +
                    "FROM       max_effort_upper meu " +
        
                    "INNER JOIN max_effort_upper_has_accesory_lifts_upper jt2 " +
                    "ON         meu.max_effort_upper_id = jt2.max_effort_upper_id " +
                    "INNER JOIN accesory_lifts_upper alu " +
                    "ON         jt2.accesory_lifts_upper_id = alu.accessory_lifts_upper_id;";
            }
        
            if (workout.day == 2) {
        
            }
            if (workout.day == 3) {
        
            }
            if (workout.day == 4) {
        
            }
            //return the workout based on day and macrocycle
            con.query(
                mainLiftQuery,
                function(err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    workout.mainLift = result[0].main_lift;
                });
            con.query(
                accessoryLiftsQuery,
                function(err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    var counter = 0;
                    workout.accesoryLifts = new Array();
                    Object.keys(result).forEach(function(key) {
                        var row = result[key];
                        workout.accesoryLifts.push(row.accessory_lift);
                    });
                    console.log(workout);
                    res.send(workout);
                });

    });

    //if it is day one...
    /*if (workout.day == 1) {

        mainLiftQuery =
            "SELECT     mlu.name AS main_lift " +
            "FROM       max_effort_upper meu " +

            "INNER JOIN max_effort_upper_has_main_lifts_upper jt1  " +
            "ON         meu.max_effort_upper_id = jt1.max_effort_upper_id " +
            "INNER JOIN main_lifts_upper mlu " +
            "ON         jt1.main_lifts_upper_id = mlu.main_lifts_upper_id;";

        accessoryLiftsQuery =
            "SELECT alu.name AS accessory_lift " +
            "FROM       max_effort_upper meu " +

            "INNER JOIN max_effort_upper_has_accesory_lifts_upper jt2 " +
            "ON         meu.max_effort_upper_id = jt2.max_effort_upper_id " +
            "INNER JOIN accesory_lifts_upper alu " +
            "ON         jt2.accesory_lifts_upper_id = alu.accessory_lifts_upper_id;";
    }

    if (workout.day == 2) {

    }
    if (workout.day == 3) {

    }
    if (workout.day == 4) {

    }

    //return the workout based on day and macrocycle
    con.query(
        mainLiftQuery,
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            workout.mainLift = result[0].main_lift;
        });
    con.query(
        accessoryLiftsQuery,
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            var counter = 0;
            workout.accesoryLifts = new Array();
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                workout.accesoryLifts.push(row.accessory_lift);
            });
            console.log(workout);
            res.send(workout);
        });*/
});

// Mark the current workout as complete
router.post("/complete-workout", function(req, res, next) {
    console.log(req.body);
    var macrocycleDayQuery = "";

    //res.send(req.body.maxLift)

    //find the day
    macrocycleDayQuery =
        "SELECT     mc.count AS macrocycle, mc.day AS day " +
        "FROM       macrocycle mc " +
        "INNER JOIN user u " +
        "ON         u.macrocycle_id = mc.macrocycle_id " +
        "WHERE      u.user_id='1';";

    con.query(
        macrocycleDayQuery,
        function(err, result, fields) {
            if (err) throw err;
            
            console.log(result);

            //if day is 1, write new record to records upper
            if(result[0].day == 1){
                var insertRecordsUpperQuery = 
                    "INSERT INTO records_upper(weight_lifted)" + 
                    "VALUES      (" + req.body.maxLift + ");";
                con.query(
                    insertRecordsUpperQuery,
                    function(err, result, fields) {
                        if (err) throw err;
                    console.log(result.insertId);
                    var recordsUpperId = result.insertId;

                    //get the main lift id and write to the records_upper_has_main_lifts_upper
            });
            }
    
        });
        //if day is 2, write new record to records lower
        //if day is 4, increment macrocycle by 1
            //set day to to 1
        //if macrocycle is at 3, delete all workouts
            //set macrocycle to 1
            //create all new workouts
            //else, increment day by one
});

module.exports = router;