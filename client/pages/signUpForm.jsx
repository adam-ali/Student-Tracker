// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
//
// class SignUpForm extends Component {
//   render() {
//     const { handleSubmit } = this.props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <Field name="firstName" component="input" type="text"/>
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <Field name="lastName" component="input" type="text"/>
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <Field name="email" component="input" type="email"/>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }
// SignUpForm = reduxForm({
//   form: 'contact' // a unique name for this form
// })(SignUpForm);
//
// export default SignUpForm;
import React from 'react'
import { Field, reduxForm, formReducer } from 'redux-form';
import Select from 'react-select';

var options = [
  { value: 'science', label: 'Science' },
  { value: 'maths', label: 'Maths'},
  { value: 'computing', label: 'Computing'},
  { value: 'english', label: 'English'},
  { value: 'maths', label: 'Maths', clearableValue: false }
];
function logChange(val) {
  console.log("Selected: " + val);
}

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
}

function checkPassword(form)
{
  if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if(form.pwd1.value.length < 3) {
      alert("Error: Password must contain at least three characters!");
      form.pwd1.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form.pwd1.focus();
    return false;
  }

  alert("You entered a valid password: " + form.pwd1.value);
  return true;
}
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
        <div>
          <label className="label">Name</label>
          <div>
            <Field name="Name" component="input" type="text" placeholder="Name"/>
          </div>
        </div>
        <div>
          <label className="label">Age</label>
          <div>
            <Field name="age" component="input" type="number" placeholder="Age"/>
          </div>
        </div>
        <div>
          <label className="label">Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label className="label">Year</label>
          <div>
            <Field name="year" className="select" component="span">
              <select>
                <option></option>
                <option value="12">Year 12</option>
                <option value="13">Year 13</option>
                <option value="14">Year 14</option>
              </select>
            </Field>
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
