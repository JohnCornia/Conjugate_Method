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

//get records
router.get("/", function(req, res, next) {
    var recordsQuery =
        "SELECT     rl.weight_lifted, mll.name  " +
        "FROM       records_lower rl " +
        "INNER JOIN records_lower_has_main_lifts_lower rhl " +
        "ON         rhl.records_lower_id = rl.records_lower_id " +
        "INNER JOIN main_Lifts_lower mll " +
        "ON         mll.main_lifts_lower_id = rhl.main_lifts_lower_id " +
        "INNER JOIN users_has_records_lower uhrl " +
        "ON         uhrl.records_lower_id = rl.records_lower_id " +
        "INNER JOIN user u " +
        "ON         u.user_id = uhrl.user_id " +
        "WHERE      u.user_id=1 " +
        "UNION ALL " +
        "SELECT     ru.weight_lifted, mlu.name   " +
        "FROM       records_upper ru " +
        "INNER JOIN records_upper_has_main_lifts_upper rhu " +
        "ON         rhu.records_upper_id = ru.records_upper_id " +
        "INNER JOIN main_Lifts_upper mlu " +
        "ON         mlu.main_lifts_upper_id = rhu.main_lifts_upper_id " +
        "INNER JOIN users_has_records_upper uhru " +
        "ON         uhru.records_upper_id = ru.records_upper_id " +
        "INNER JOIN user u " +
        "ON         u.user_id = uhru.user_id " +
        "WHERE      u.user_id=1;";
    con.query(
        recordsQuery,
        function(err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
});

module.exports = router;