var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var apiRouter = require('./routes/apiRouter');
var appRouter = require('./routes/appRouter');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/studentTracker', function (err, db) {
    if (!err) {
        console.log('connected to the Database');
    }
});

app.use(bodyParser.urlencoded({
    extended: true
}));
////////////
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
///////
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', apiRouter);
app.use('/', appRouter);

app.listen(3000, function () {
    console.log('connected to port 3000');
});
