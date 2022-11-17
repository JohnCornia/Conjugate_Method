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

router.get("/get-workout", function(req, res, next) {
    con.query(
        "SELECT      mlu.name AS main_lift, alu.name AS accessory_lifts " +
        " FROM       max_effort_upper meu"

        +
        " INNER JOIN max_effort_upper_has_main_lifts_upper jt1 " +
        " ON         meu.max_effort_upper_id = jt1.max_effort_upper_id" +
        " INNER JOIN main_lifts_upper mlu" +
        " ON         jt1.main_lifts_upper_id = mlu.main_lifts_upper_id"

        +
        " INNER JOIN max_effort_upper_has_accesory_lifts_upper jt2" +
        " ON         meu.max_effort_upper_id = jt2.max_effort_upper_id" +
        " INNER JOIN accesory_lifts_upper alu" +
        " ON         jt2.accesory_lifts_upper_id = alu.accessory_lifts_upper_id;",
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });

});

module.exports = router;