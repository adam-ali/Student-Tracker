var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeacherTracker = new Schema({
  name: String,
  email: String,
  courses: Object,
  notifications: Array,
  meetings: Array
});

module.exports = mongoose.model('Teacher', TeacherTracker);


