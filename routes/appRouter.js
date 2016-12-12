var express = require('express');
var path = require('path');
var appRouter = express.Router();

appRouter.get('/',function (req,res) {
    res.sendFile(path.resolve('./public/index.html'));
});

module.exports = appRouter;
