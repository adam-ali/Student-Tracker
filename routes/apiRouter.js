var express = require('express');
var apiRouter = express.Router();
var StudentsRouter = require('./api/studentsRouter');
var TeachersRouter = require('./api/teachersRouter');

apiRouter.use('/students', StudentsRouter);
apiRouter.use('/teachers', TeachersRouter);

module.exports = apiRouter;