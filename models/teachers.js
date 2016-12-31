var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeacherTracker = new Schema({
  name: String,
  email: String,
  courses: Object,
  notifications: Array,
  meetings: Array
});

module.exports = mongoose.model('teachers', TeacherTracker);


/*

 name: "mr.Smith",
 email: "smith@college.com",
 courses: ['science', 'maths'],
 notifications: [],
 meetings: []
 */
