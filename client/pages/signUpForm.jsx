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
import { Field, reduxForm, formReducer } from 'redux-form'
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

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field name="Name" component="input" type="text" placeholder="Name"/>
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="text" placeholder="Age"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Year</label>
        <div>
          <Field name="year" component="select">
            <option></option>
            <option value="12">Year 12</option>
            <option value="13">Year 13</option>
            <option value="14">Year 14</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Courses</label>
        <Field name="Courses" component="select">
          <select name="sites-list" size="6" multiple>
            <option value="Science">Science</option>
            <option value="Maths">Maths</option>
            <option value="Computing">Computing</option>
            <option value="English">English</option>
            <option value="IT">IT</option>
          </select>
        </Field>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
};


export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
