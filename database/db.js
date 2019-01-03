const dbConfig = require('./config.js');
const mysql = require('mysql');

// module.exports = {
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'photo_gallery'
// }

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log(`You're connected!`)
    }
})

const grabPhotos = (id, callback) => {
    connection.query(`SELECT user, userPic, elite, friends, reviews, url, restaurant_id, rating, comments, day FROM users INNER JOIN pictures ON user_id = users.id WHERE restaurant_id = ${id}`, (err, result) => {
        if (err) {
            throw err;
        } else {
          callback(null, result); 
        }
    })
}

module.exports = {
    connection,
    grabPhotos
}