const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const multerRoute = require('./routes/multer.js');
const mainRoute = require('./routes/main.js');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/multer', multerRoute);
server.use('/', mainRoute);

server.listen(8000);