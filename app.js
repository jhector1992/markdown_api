const express = require('express');
require('./connection');

const app   = express();
const port  = 4000;
const address   = '192.168.100.11';

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

//Routes
var generalRouter = require('./routes/routes');
app.use('/', generalRouter);

// Listener
app.listen(port, address, () => console.log(`liten on ${address}:${port}`));