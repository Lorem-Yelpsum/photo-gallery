const dbConfig = require('./config.js');
const mysql = require('mysql');

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log(`You're connected!`)
    }
})


module.exports = {
    connection
}