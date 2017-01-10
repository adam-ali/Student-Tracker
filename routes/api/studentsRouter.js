var express = require('express');
var Students = require('../../models/students');
var StudentsRouter = express.Router();

StudentsRouter.route('/')
  .get(function (req, res, next) {
    Students.find({}, function(err,doc){
      return res.status(200).json(doc);
    });
  })
  .post(function (req, res, next) {
    var newStudent = req.body;
    var newStudentDoc = new Students(newStudent);
    newStudentDoc.save(function(err, doc){
      if (err){
        next(new Error());
      }
      return res.status(201).json(doc);
    });
  })
  .delete(function (req,res,next) {
      Students.remove({ _id: req.body._id },function (err,doc) {
        return res.status(201).json(doc);
      })
    }

  );

module.exports = StudentsRouter;

