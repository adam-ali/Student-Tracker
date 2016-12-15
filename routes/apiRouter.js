var express = require('express');
var apiRouter = express.Router();
var StudentsRouter = require('./api/studentsRouter');
// var floorsRouter = require('./api/floorsRouter');
//
apiRouter.use('/students',StudentsRouter);
// apiRouter.use('/bookings',bookingsRouter  );

module.exports=apiRouter;