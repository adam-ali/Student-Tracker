import React from 'react'
import {Link} from 'react-router'

var SignIn = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container has-text-centered">
          <h1>
            Sign In
          </h1>

          <Link to="/"> home </Link>
        </div>
      </div>
    )
  }
});

module.exports = SignIn;