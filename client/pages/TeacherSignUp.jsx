import React from 'react'
import { Field, reduxForm, formReducer } from 'redux-form';

window.onmousedown = function (e) {
  var el = e.target;
  if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
    e.preventDefault();

    // toggle selection
    if (el.hasAttribute('selected')) el.removeAttribute('selected');
    else el.setAttribute('selected', '');

    // hack to correct buggy behavior
    var select = el.parentNode.cloneNode(true);
    el.parentNode.parentNode.replaceChild(select, el.parentNode);
  }
};

function checkPasswordMatch() {
  var password = $("#password").val();
  var confirmPassword = $("#password2").val();
  if (password != confirmPassword)
    $("#help").html("Passwords dont Match");
  else
    $("#help").html("");
}

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <h1 className="title">Teacher</h1>
        <div>
          <label className="label">Name</label>
          <div>
            <Field name="name" component="input" type="text" placeholder="Name"/>
          </div>
        </div>
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
          <label className="label">Re-enter Password</label>
          <div>
            <input type="password" id="password2" placeholder="re enter your Password" onChange={checkPasswordMatch()}/>
          </div>
          <span id="help" className="help is-danger"></span>
        </div>
        <div className="form-buttons">
          <div className="control is-grouped center">
            <p className="control">
              <button className="button is-primary" type="submit" disabled={pristine || submitting}>Submit</button>
            </p>
            <p className="control">
              <a className="button is-danger is-outlined" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</a>
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
