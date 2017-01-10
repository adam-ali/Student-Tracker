import React from 'react';
import {Link} from 'react-router';
import { Field, reduxForm } from 'redux-form';
import StudentSignUp from './studentForm';
import TeacherSignUp from './TeacherSignUp';

var SignUp = React.createClass({
  getInitialState:function(){
    return {
      TeacherOrStudent:'students',
    }
  },
  changeToTeacher: function () {
    this.setState({
      TeacherOrStudent: 'teachers'
    })
  },
  changeToStudent: function () {
    this.setState({
      TeacherOrStudent: 'students'
    })
  },
  handleSubmit (values) {
    // Do something with the form values
    console.log(values);
     values.courses = [];
     values.notifications = [];
     values.meetings = [];
     if (this.state.TeacherOrStudent === 'students'){
       values.tests = [];
       values.targets = [];
     }
    setTimeout(
      $.ajax({
        type: "POST",
        url: '//localhost:3002/api/'+this.state.TeacherOrStudent,
        data: values,
        success: function () {
          swal(
            'Booking Saved!',
            'Thank you has been succesfully saved',
            'success'
          ).then(function() {
            location.reload();
          })
        },
        error: function () {
          sweetAlert(
            'Error!',
            'Sorry there has been an error please try again',
            'error'
          );
        }

      })
      ,2000);

    console.log(values);

  },
  render() {
    if(this.state.TeacherOrStudent === 'students'){
      return (
        <div>
          <div className="container has-text-centered">
            <a className="button is-link" onClick={this.changeToTeacher}>Sign up as Teacher</a>
            <h1 className="title ">Sign up</h1>
            <Link to="/"> home </Link>
            <StudentSignUp onSubmit={this.handleSubmit} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="container has-text-centered">
            <a className="button is-link" onClick={this.changeToStudent}>Sign up as Student</a>
            <h1 className="title ">Sign up</h1>
            <Link to="/"> home </Link>
            <TeacherSignUp onSubmit={this.handleSubmit} />
          </div>
        </div>
      )
    }
  }
});

module.exports = SignUp;