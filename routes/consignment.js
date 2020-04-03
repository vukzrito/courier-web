var express = require('express');
var router = express.Router();

/* GET consignment */
router.get('/:waybillNo', async function (req, res, next) {
    let waybillNo = req.params.waybillNo;
    console.log(waybillNo)
    //todo get consignment from db
    if (waybillNo != null) {
        let consigment = await getConsignment(waybillNo);
        let transactions = await getTransactions(consigment.id);
        consigment = { ...consigment, transactions }
        console.log(consigment);
        res.render('consignment-detail', { consigment, transactions })
    } else {
        res.render('consignment');
    }

});
/* GET consignment */
router.get('/', async function (req, res, next) {
    let waybillNo = req.params.waybillNo;
    console.log(waybillNo)
    //todo get consignment from db

    res.render('consignment');


});
/* POST consignment */
router.post('/', async (req, res, next) => {
    let waybillNo = req.body.waybill;
    console.log(waybillNo)
    //todo get consignment from db
    if (waybillNo != null) {
        let consigment = await getConsignment(waybillNo);
        let transactions = await getTransactions(consigment.id);
        consigment = { ...consigment, transactions }
        console.log(consigment);
        res.render('consignment-detail', { consigment, transactions })
    } else {
        res.render('consignment');
    }
});

function getConsignment(waybillNo) {
    return new Promise((resolve, reject) => {
        let database = require('../database/database');
        database.query(`SELECT c.id, c.status, c.waybillNo, c.senderId,c.recepientId,
         s.name AS senderName, r.name as recepientName
          FROM consignment c INNER JOIN recepient r ON r.id = c.recepientId 
          INNER JOIN sender s on s.id = c.senderId
          WHERE waybillNo='${waybillNo}'`, (err, result) => {
            if (err)
                reject(err);
            console.log(" Result : " +result);    
            resolve(JSON.parse(JSON.stringify(result))[0]);
        });
    })

}

function getTransactions(consignmentId) {
    return new Promise((resolve, reject) => {
        let database = require('../database/database');
        database.query(`SELECT t.id,t.date, t.action, t.description, t.consignmentId, u.name, u.email FROM transaction t 
        INNER JOIN user u ON u.id = t.userId WHERE consignmentId ='${consignmentId}'`, (err, result) => {
            if (err)
                reject(err);
            resolve(JSON.parse(JSON.stringify(result)));
        });
    })

}

module.exports = router;