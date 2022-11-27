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
            workout.macrocycle = result[0].macrocycle;

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
                mainLiftQuery =
                    "SELECT     mll.name AS main_lift " +
                    "FROM       max_effort_lower mel " +
                    
                    "INNER JOIN max_effort_lower_has_main_lifts_lower jt1 " +
                    "ON         mel.max_effort_lower_id = jt1.max_effort_lower_id " +
                    "INNER JOIN main_lifts_lower mll " +
                    "ON         jt1.main_lifts_lower_id = mll.main_lifts_lower_id;";
        
                accessoryLiftsQuery =
                    "SELECT alw.name AS accessory_lift " +
                    "FROM       max_effort_lower mel " +
                    
                    "INNER JOIN max_effort_lower_has_accesory_lifts_lower jt1 " +
                    "ON         mel.max_effort_lower_id = jt1.max_effort_lower_id " +
                    "INNER JOIN accesory_lifts_lower alw " +
                    "ON         jt1.accesory_lifts_lower_id = alw.accessory_lifts_lower_id;";
            }
            if (workout.day == 3) {
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
            if (workout.day == 4) {
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

            //if day is 1... 
            
            //...write new record to records_upper...
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

                    //get the main lift id 
                    var mainLiftIdQuery = 
                    "SELECT     mlu.main_lifts_upper_id " +
                    "FROM       max_effort_upper meu " +
                    "INNER JOIN max_effort_upper_has_main_lifts_upper jt1 " +
                    "ON         meu.max_effort_upper_id = jt1.max_effort_upper_id " +
                    "INNER JOIN main_lifts_upper mlu " +
                    "ON         jt1.main_lifts_upper_id = mlu.main_lifts_upper_id;";

                    con.query(
                        mainLiftIdQuery,
                        function(err, result, fields) {
                            if (err) throw err;
                            console.log(result[0].main_lifts_upper_id);
                            var mainLiftId = result[0].main_lifts_upper_id;

                            //...insert to records_upper_has_main_lifts_upper...
                            var insertRecordsUpperHasMainLiftsUpper = 
                            "INSERT INTO records_upper_has_main_lifts_upper(records_upper_id, main_lifts_upper_id) " + 
                            "VALUES      (" + recordsUpperId + ", " + mainLiftId + ");";

                            con.query(
                                insertRecordsUpperHasMainLiftsUpper,
                                function(err, result, fields) {
                                    if (err) throw err;
                                    
                                    //...insert to users_has_records_upper...
                                    var insertUsersHasRecordsUpper = 
                                    "INSERT INTO users_has_records_upper(user_id, records_upper_id) " +
                                    "VALUES      (1," +  recordsUpperId + ");";
                                    //get user_id
                                    /*just using 1 for now*/
                                    con.query(
                                        insertUsersHasRecordsUpper,
                                        function(err, result, fields) {
                                            if (err) throw err;
                                        });
                                });
                            
                            //get dynamic_effort_upper_id
                            var getWorkoutId = 
                            "SELECT     deu.dynamic_effort_upper_id " +
                            "FROM       dynamic_effort_upper deu " +
                            
                            "INNER JOIN macrocycle mc " +
                            "ON         mc.dynamic_effort_upper_id = deu.dynamic_effort_upper_id " +
                            "INNER JOIN user u " +
                            "ON         u.macrocycle_id = mc.macrocycle_id " +
                            "WHERE u.user_id='1';"; 

                            con.query(
                                getWorkoutId,
                                function(err, result, fields) {
                                    if (err) throw err;
                                    console.log(result);
                                    var dynamicEffortId = result[0].dynamic_effort_upper_id;

                                    //Update the record id in this macrocycle's dynamic_effort_upper workout
                                    var insertRecordId = 
                                    "UPDATE dynamic_effort_upper deu " +
                                    "SET    records_upper_id='" + recordsUpperId + "' " +
                                    "WHERE deu.dynamic_effort_upper_id = '" +dynamicEffortId + "';";
                                    con.query(
                                        insertRecordId,
                                        function(err, result, fields) {
                                            if (err) throw err;
                                        });
                                });
                        });
                    
                });

                //increment day in macrocycle table
                var updateDay = 
                "UPDATE macrocycle mc " +
                "SET    day=2 " +
                "WHERE  mc.macrocycle_id=1;"; 
                con.query(
                    updateDay,
                    function(err, result, fields) {
                        if (err) throw err;
                    });   
            }

            //if day is 2, write new record to records lower
            if (result[0].day == 2) {

                //increment day to 3
                var updateDay = 
                "UPDATE macrocycle mc " +
                "SET    day=3 " +
                "WHERE  mc.macrocycle_id=1;"; 
                con.query(
                    updateDay,
                    function(err, result, fields) {
                        if (err) throw err;
                    });
            }
            //if day is 3, increment day by one
            if (result[0].day == 3) {
                //increment day to 4
                var updateDay = 
                "UPDATE macrocycle mc " +
                "SET    day=4 " +
                "WHERE  mc.macrocycle_id=1;"; 
                con.query(
                    updateDay,
                    function(err, result, fields) {
                        if (err) throw err;
                    }); 
            }
            //if day is 4, increment macrocycle by 1
            if (result[0].day == 4) {
             //set day to to 1
                //delete all workouts
                //if macrocycle is at 3, set macrocycle to 1
                //create all new workouts   
            }
        });
});

module.exports = router;