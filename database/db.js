const dbConfig = require('./config.js');
const mysql = require('mysql');

const connection = mysql.createConnection(dbConfig);


module.exports = {
    connection
}