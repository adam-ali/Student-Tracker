import React from 'react'
import { Field, reduxForm, formReducer } from 'redux-form';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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

      <div>
        <label className="label">Signing in as</label>

        <span className="select">
          <Field name="user" component="select">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </Field>
        </span>
      </div>


      <div className="form-buttons">
          <div className="control is-grouped center">
            <p className="control">
              <button className="button is-primary" type="submit" disabled={pristine || submitting}>Sign In</button>
            </p>
          </div>
        </div>
    </form>
  )
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
