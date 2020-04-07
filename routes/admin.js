var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let database = require('../database/database');
    database.query("select * from  `applications`", (error, results, fields) => {
        if (error)
            console.error(error);

        console.log(JSON.stringify(results))
    })
    res.render('admin', { title: 'Express' });
});

module.exports = router;