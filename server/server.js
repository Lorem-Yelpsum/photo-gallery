const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3001;
const db = require('../database/db');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:restId/photos', (req,res) => {
    db.grabPhotos(req.params.restId, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(result);
        }
    })
});

app.get('/:restId/:photoId', (req, res)=> {

});

app.listen(PORT, function(err){
    if(err) {
        throw err;
    } else {
        console.log(`You're connected to port: ${PORT}!`);
    }
})