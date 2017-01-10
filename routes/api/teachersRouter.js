var express = require('express');
var Teacher = require('../../models/teachers');
var TeacherRouter = express.Router();

TeacherRouter.route('/')
  .get(function (req, res, next) {
    Teacher.find({}, function(err,doc){
      return res.status(200).json(doc);
    });
  })
  .post(function (req, res, next) {
    var newTeacher = req.body;
    var newTeacherDoc = new Teacher(newTeacher);
    newTeacherDoc.save(function(err, doc){
      if (err){
        next(new Error());
      }
      return res.status(201).json(doc);
    });
  })
  .delete(function (req,res,next) {
      Teacher.remove({ _id: req.body._id },function (err,doc) {
        return res.status(201).json(doc);
      })
    }

  );

module.exports = TeacherRouter;

