import React from 'react'
import {Link} from 'react-router'
import StudentSignIn from './sign-in/StudentSignIn'

var SignIn = React.createClass({
  handleSubmit (values) {
    // Do something with the form values
    console.log(values);

    if (values.user ==='teacher'){

      console.log('teeecher')
    }else {

      console.log('student')

    }
  },
  render: function () {
      return (
        <div>
          <div className="container has-text-centered">
            <h1 className="title">Sign In {this.state.TeacherOrStudent}</h1>
            <Link to="/"> home </Link>
            <div className="box">
              <StudentSignIn onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
    )
  }
});

module.exports = SignIn;