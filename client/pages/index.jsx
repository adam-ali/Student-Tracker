import React from 'react'
import {Link} from 'react-router'

var Index = React.createClass({
  render: function () {
    return (
      <div>
          <div className="container has-text-centered">
            <h1>
              Home page
            </h1>
            <h1 className="title">
               A Student tracking application
            </h1>
            <Link to="/signin"> sign in </Link>
            <Link to="/signup"> sign up </Link>
          </div>
      </div>
    )
  }
});

module.exports = Index;