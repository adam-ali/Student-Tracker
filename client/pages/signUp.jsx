import React from 'react';
import {Link} from 'react-router';
import { Field, reduxForm } from 'redux-form';
import SignUpForm from './signUpForm';

var SignUp = React.createClass({
  handleSubmit (values) {
    // Do something with the form values

    console.log(values);
  },
  render() {
    return (
      <div>
        <div className="container has-text-centered">
          <h1>
            Sign up
          </h1>
          <Link to="/"> home </Link>
          <SignUpForm onSubmit={this.handleSubmit} />

        </div>
      </div>
    )
  }
});

module.exports = SignUp;