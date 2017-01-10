/**
 * Created by adam on 09/01/17.
 */
import React from 'react'
import { Field, reduxForm, formReducer } from 'redux-form';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <h1 className="title">Teacher</h1>
        <div>
          <label className="label">Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label className="label">Password</label>
          <div>
            <Field name="password" id="password" component="input" type="password" placeholder="Enter your Password" />
          </div>
        </div>
        <div className="form-buttons">
          <div className="control is-grouped center">
            <p className="control">
              <button className="button is-primary" type="submit" disabled={pristine || submitting}>Sign In</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)