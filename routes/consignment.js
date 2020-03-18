var express = require('express');
var router = express.Router();

/* GET consignment */
router.get('/:waybillNo', function(req, res, next) {
    let waybillNo = req.params.waybillNo;
    console.log(waybillNo)
    res.send(`waybill : ${waybillNo}`);
});

/* POST consignment */
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;