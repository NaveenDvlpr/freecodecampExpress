let express = require('express');
let app = express();

require('dotenv').config();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    const object = {"message": "Hello json"};
    console.log("helloUp");
    if(process.env.MESSAGE_STYLE == "uppercase") {
        console.log("hello");
        object.message = object.message.toUpperCase();
    }
    res.json(object);
})


console.log("Hello World");




































 module.exports = app;
