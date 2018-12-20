const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'fill in bundle.js later')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function(err){
    if(err) {
        throw err;
    } else {
        console.log(`You're connected to port: ${PORT}!`);
    }
})