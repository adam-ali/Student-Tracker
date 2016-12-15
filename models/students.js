var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentTracker = new Schema({
  name: String,
  age: String,
  email: String,
  courses: Array,
  year: String,
  notifications: Array,
  tests: Array,
  meetings: Array,
  targets: Array
});

module.exports = mongoose.model('students', StudentTracker);

/*
name: "adam",
age:'20',
email: "adam_ali_96@hotmail.co.uk",
courses: [{name:'science', teacher:'mr. walker' }],
year: "13",
notifications: [],
tests: [],
meetings: [],
targets: []
*/
