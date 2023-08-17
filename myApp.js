let express = require('express');
let app = express();
require('dotenv').config();

/* app.get('/', (req, res) => {
    res.send('Hello Express');
}) */

app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    const object = {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE == "uppercase") object.message.toUpperCase();
    res.json(object);
})


console.log("Hello World");




































 module.exports = app;
