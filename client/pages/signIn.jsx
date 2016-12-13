import React from 'react'
import {Link} from 'react-router'

var SignIn = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container has-text-centered">
          <h1>
            sign In page
          </h1>
          <h1 className="title">
            A Student tracking application
          </h1>
          <Link to="/"> home </Link>
        </div>
      </div>
    )
  }
});

module.exports = SignIn;