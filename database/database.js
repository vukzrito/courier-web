var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '176.32.230.49',
    user: 'cl59-ifundi_sa',
    password: 'G1v3M3Acc3ss@!@#',
    database: 'cl59-ifundi_sa'
});

var query = (statement, callback) => {
    connection.query(statement, callback);
}
var insert = (statement, values, callback) => {
    connection.query(statement, values, callback);
}
var database = { query, insert }
module.exports = database;